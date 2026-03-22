import type { ProjectItem } from "@/data/projects";
import { VideoEmbed } from "@/components/VideoEmbed";

const categoryClasses: Record<ProjectItem["categoryStyle"], string> = {
  commercial: "bg-secondary-container text-on-secondary-container",
  "brand-film": "bg-tertiary-container text-on-tertiary-container",
  "music-video": "bg-primary-container text-on-primary-container",
};

const titleClasses: Record<ProjectItem["titleAccent"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const sectionToneClasses: Record<ProjectItem["sectionTone"], string> = {
  low: "bg-surface-container-low/30",
  default: "",
  high: "bg-surface-container-high/20",
};

const shadowClasses: Record<NonNullable<ProjectItem["shadowVariant"]>, string> = {
  neutral: "shadow-[0_40px_80px_rgba(0,0,0,0.5)]",
  primary: "shadow-[0_40px_80px_rgba(109,35,249,0.1)]",
  tertiary: "shadow-[0_40px_80px_rgba(129,236,255,0.1)]",
};

/** Splits titles on real newlines so `\n`, `\r\n`, and `\r` all become `<br />` gaps. */
function titleLines(title: string): string[] {
  return title.split(/\r\n|\r|\n/g);
}

type VideoProjectCardProps = {
  project: ProjectItem;
  /** First project row anchors in-page nav target `#projects`. */
  sectionId?: string;
};

export function VideoProjectCard({ project, sectionId }: VideoProjectCardProps) {
  const shadow = project.shadowVariant ?? "neutral";
  const tone = sectionToneClasses[project.sectionTone];

  return (
    <section
      id={sectionId}
      className={`group project-card mb-10 flex min-w-0 flex-col items-center gap-10 px-5 py-10 sm:mb-12 sm:gap-12 sm:px-6 sm:py-12 md:gap-16 md:px-24 md:py-16 ${tone} md:flex-row`}
    >
      <div
        className={`relative w-full min-w-0 overflow-hidden rounded-xl bg-surface-container-highest md:w-3/5 ${shadowClasses[shadow]}`}
      >
        <div className="relative aspect-video w-full max-w-full transition-transform duration-700 md:group-hover:scale-105">
          <VideoEmbed
            videoUrl={project.videoUrl}
            title={titleLines(project.title).join(" ")}
          />
        </div>
        <div className="scrubber-line absolute bottom-0 left-0" />
      </div>
      <div className="w-full min-w-0 space-y-5 sm:space-y-6 md:w-2/5 md:space-y-8">
        <div
          className={`inline-block rounded-full px-3 py-1 font-label text-[9px] uppercase tracking-widest sm:px-4 sm:text-[10px] ${categoryClasses[project.categoryStyle]}`}
        >
          {project.category}
        </div>
        <div>
          <h2
            className={`mb-1.5 font-headline text-2xl font-bold leading-tight sm:mb-2 sm:text-3xl md:text-4xl lg:text-5xl ${titleClasses[project.titleAccent]}`}
          >
            {titleLines(project.title).map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <p className="flex flex-wrap items-center gap-2 font-label text-xs text-on-surface-variant sm:text-sm">
            <span className="material-symbols-outlined shrink-0 text-[15px] sm:text-[16px]">
              {project.roleIcon}
            </span>
            <span className="min-w-0">Role: {project.role}</span>
          </p>
        </div>
        <p className="max-w-md font-body text-base leading-relaxed text-on-surface/80 sm:text-lg">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-xl bg-surface-container-highest px-3 py-1.5 font-label text-[0.65rem] text-on-surface-variant sm:px-4 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
