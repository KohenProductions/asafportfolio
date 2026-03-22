import { resolveVideoEmbed } from "@/lib/videoUrl";

type VideoEmbedProps = {
  videoUrl: string;
  title: string;
};

export function VideoEmbed({ videoUrl, title }: VideoEmbedProps) {
  const resolved = resolveVideoEmbed(videoUrl);

  if (resolved.kind === "unsupported") {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-surface-container-highest px-6 text-center">
        <p className="font-body text-sm leading-relaxed text-on-surface-variant">
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
      className="h-full w-full rounded-xl border-0 object-cover"
    />
  );
}
