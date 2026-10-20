const PI_ME_URL = "https://api.minepi.com/v2/me";

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body);

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

export async function piVerifyHandler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    return sendJson(res, 400, { error: "Invalid JSON body" });
  }

  const accessToken = typeof body?.accessToken === "string" ? body.accessToken.trim() : "";
  if (!accessToken) {
    return sendJson(res, 400, { error: "accessToken is required" });
  }

  let piResponse;
  try {
    piResponse = await fetch(PI_ME_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.error("[pi/verify] Failed to reach Pi API:", error);
    return sendJson(res, 502, { error: "Could not reach Pi API" });
  }

  if (!piResponse.ok) {
    return sendJson(res, 401, { error: "Invalid or expired Pi access token" });
  }

  const piUser = await piResponse.json();

  const claimedUid = body?.user?.uid;
  if (claimedUid && claimedUid !== piUser.uid) {
    return sendJson(res, 401, { error: "User does not match access token" });
  }

  return sendJson(res, 200, {
    verified: true,
    user: { uid: piUser.uid, username: piUser.username },
  });
}
