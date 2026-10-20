import { useState } from "react";
import { initPiSdk, usePiSdk } from "../lib/usePiSdk";

function onIncompletePaymentFound(payment) {
  console.log("Incomplete Pi payment found:", payment);
}

export const PI_TOKEN_STORAGE_KEY = "pi_accessToken";

export function sendTokenToParent(accessToken) {
  if (!accessToken || window.parent === window) return;
  window.parent.postMessage(
    {
      type: "PI_ACCESS_TOKEN",
      accessToken,
      token: accessToken,
      piAccessToken: accessToken,
    },
    "*",
  );
  window.parent.postMessage(accessToken, "*");
}

function PiLoginButton({ onLogin }) {
  const { ready, status, error: sdkError } = usePiSdk();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const Pi = await initPiSdk();
      const result = await Pi.authenticate(["username"], onIncompletePaymentFound);
      console.log("Pi.authenticate result:", result);
      const accessToken = result.accessToken;

      const response = await fetch("/api/pi/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken, user: result.user }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Verification failed");

      localStorage.setItem(PI_TOKEN_STORAGE_KEY, accessToken);
      sendTokenToParent(accessToken);

      setUser(data.user);
      onLogin?.(data.user);
    } catch (err) {
      console.error("Pi login failed:", err);
      setError(err.message || "Pi login failed");
    } finally {
      setLoading(false);
    }
  }

  if (user) {
    return (
      <p className="text-center text-sm text-green-700 bg-green-50 rounded-lg py-2" role="status">
        Signed in with Pi as <span className="font-semibold">@{user.username}</span>
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={!ready || loading}
        className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in..." : status === "loading" ? "Loading Pi SDK..." : "Sign in with Pi"}
      </button>
      {(error || sdkError) && (
        <p className="text-center text-sm text-red-600" role="alert">
          {error || sdkError}
        </p>
      )}
    </div>
  );
}

export default PiLoginButton;
