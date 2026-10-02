// GitHub Pages caches index.html for up to 10 minutes, so after a deploy a
// visitor can still be served the old app. Compare this bundle's build id to
// the live version.json and reload once if a newer build has been deployed.
const RELOAD_KEY = "reloadedForBuild";

const checkForNewVersion = async () => {
  try {
    const res = await fetch(`/version.json?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!res.ok) return;
    const { buildId } = await res.json();
    if (!buildId || buildId === __BUILD_ID__) return;

    // Only reload once per new build to avoid a reload loop if the
    // browser keeps serving a stale index.html
    if (sessionStorage.getItem(RELOAD_KEY) === buildId) return;
    sessionStorage.setItem(RELOAD_KEY, buildId);
    window.location.reload();
  } catch {
    // Offline or storage blocked; keep running the current version
  }
};

export const startVersionCheck = () => {
  if (import.meta.env.DEV) return;
  checkForNewVersion();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForNewVersion();
  });
};
