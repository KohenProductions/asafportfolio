export type EmbedKind = "youtube" | "google-drive" | "unsupported";

export type VideoEmbedResult =
  | { kind: "youtube"; embedUrl: string }
  | { kind: "google-drive"; embedUrl: string }
  | { kind: "unsupported"; reason: string };

const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtu.be",
]);

const DRIVE_HOSTS = new Set(["drive.google.com", "docs.google.com"]);

function tryParseUrl(raw: string): URL | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    return new URL(trimmed);
  } catch {
    try {
      return new URL(`https://${trimmed}`);
    } catch {
      return null;
    }
  }
}

/** Extracts YouTube video id from common URL shapes. */
export function extractYouTubeVideoId(input: string): string | null {
  const url = tryParseUrl(input);
  if (!url) return null;
  const host = url.hostname.replace(/^www\./, "");
  if (host === "youtu.be") {
    const id = url.pathname.replace(/^\//, "").split("/")[0];
    return id || null;
  }
  if (YOUTUBE_HOSTS.has(url.hostname) || YOUTUBE_HOSTS.has(host)) {
    const v = url.searchParams.get("v");
    if (v) return v;
    const parts = url.pathname.split("/").filter(Boolean);
    const embedIdx = parts.indexOf("embed");
    if (embedIdx !== -1 && parts[embedIdx + 1]) return parts[embedIdx + 1];
    const shortIdx = parts.indexOf("shorts");
    if (shortIdx !== -1 && parts[shortIdx + 1]) return parts[shortIdx + 1];
  }
  return null;
}

/**
 * Extracts Google Drive file id from common sharing URLs.
 */
export function extractGoogleDriveFileId(input: string): string | null {
  const url = tryParseUrl(input);
  if (!url) return null;
  const host = url.hostname.replace(/^www\./, "");
  if (!DRIVE_HOSTS.has(host)) return null;

  const fileMatch = url.pathname.match(/\/file\/d\/([^/]+)/);
  if (fileMatch?.[1]) return fileMatch[1];

  const openId = url.searchParams.get("id");
  if (openId) return openId;

  if (url.pathname.includes("/uc") && url.searchParams.get("id")) {
    return url.searchParams.get("id");
  }

  return null;
}

export function resolveVideoEmbed(videoUrl: string): VideoEmbedResult {
  const yt = extractYouTubeVideoId(videoUrl);
  if (yt) {
    return {
      kind: "youtube",
      embedUrl: `https://www.youtube.com/embed/${yt}`,
    };
  }

  const driveId = extractGoogleDriveFileId(videoUrl);
  if (driveId) {
    return {
      kind: "google-drive",
      embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
    };
  }

  if (tryParseUrl(videoUrl)) {
    return {
      kind: "unsupported",
      reason: "This video link cannot be embedded directly.",
    };
  }

  return {
    kind: "unsupported",
    reason: "This video link cannot be embedded directly.",
  };
}
