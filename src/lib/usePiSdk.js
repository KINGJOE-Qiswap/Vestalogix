import { useEffect, useState } from "react";

const SDK_TIMEOUT_MS = 10000;
let initPromise = null;

function waitForPiSdk() {
  return new Promise((resolve, reject) => {
    if (window.Pi) return resolve(window.Pi);
    const started = Date.now();
    const timer = setInterval(() => {
      if (window.Pi) {
        clearInterval(timer);
        resolve(window.Pi);
      } else if (Date.now() - started > SDK_TIMEOUT_MS) {
        clearInterval(timer);
        reject(new Error("Pi SDK failed to load"));
      }
    }, 100);
  });
}

export function initPiSdk() {
  if (!initPromise) {
    initPromise = waitForPiSdk()
      .then((Pi) => {
        Pi.init({
          version: "2.0",
          sandbox: import.meta.env.VITE_PI_SANDBOX === "true",
        });
        return Pi;
      })
      .catch((error) => {
        initPromise = null;
        throw error;
      });
  }
  return initPromise;
}

export function usePiSdk() {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    initPiSdk()
      .then(() => !cancelled && setStatus("ready"))
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { ready: status === "ready", status, error };
}
