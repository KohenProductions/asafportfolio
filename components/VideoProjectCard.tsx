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
      className={`group project-card mb-12 flex flex-col items-center gap-16 px-8 py-16 md:flex-row md:px-24 ${tone}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-surface-container-highest md:w-3/5 ${shadowClasses[shadow]}`}
      >
        <div className="relative aspect-video transition-transform duration-700 group-hover:scale-105">
          <VideoEmbed
            videoUrl={project.videoUrl}
            title={titleLines(project.title).join(" ")}
          />
        </div>
        <div className="scrubber-line absolute bottom-0 left-0" />
      </div>
      <div className="w-full space-y-8 md:w-2/5">
        <div
          className={`inline-block rounded-full px-4 py-1 font-label text-[10px] uppercase tracking-widest ${categoryClasses[project.categoryStyle]}`}
        >
          {project.category}
        </div>
        <div>
          <h2
            className={`mb-2 font-headline text-4xl font-bold md:text-5xl ${titleClasses[project.titleAccent]}`}
          >
            {titleLines(project.title).map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <p className="flex items-center gap-2 font-label text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              {project.roleIcon}
            </span>
            Role: {project.role}
          </p>
        </div>
        <p className="max-w-md font-body text-lg leading-relaxed text-on-surface/80">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-xl bg-surface-container-highest px-4 py-1.5 font-label text-xs text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
