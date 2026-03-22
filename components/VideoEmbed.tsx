import { resolveVideoEmbed } from "@/lib/videoUrl";

type VideoEmbedProps = {
  videoUrl: string;
  title: string;
};

export function VideoEmbed({ videoUrl, title }: VideoEmbedProps) {
  const resolved = resolveVideoEmbed(videoUrl);

  if (resolved.kind === "unsupported") {
    return (
      <div className="flex aspect-video w-full max-w-full items-center justify-center rounded-xl bg-surface-container-highest px-4 text-center sm:px-6">
        <p className="font-body text-xs leading-relaxed text-on-surface-variant sm:text-sm">
          {resolved.reason}
        </p>
      </div>
    );
  }

  const allow =
    resolved.kind === "youtube"
      ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      : "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";

  return (
    <iframe
      title={title}
      src={resolved.embedUrl}
      allow={allow}
      allowFullScreen
      className="absolute inset-0 h-full w-full max-w-full rounded-xl border-0"
    />
  );
}
