/**
 * Edit `projects` to add reels. Each `videoUrl` accepts:
 * - YouTube (watch, embed, shorts, youtu.be)
 * - Google Drive (`/file/d/<id>/view`, `open?id=<id>`, etc.) — file must be shared for embedding
 */

export type ProjectSectionTone = "low" | "default" | "high";

export type TitleAccent = "primary" | "secondary" | "tertiary";

export type CategoryStyle = "commercial" | "brand-film" | "music-video";

export type ProjectItem = {
  id: string;
  /** Use `\n` for a line break in the heading (also respects `\r\n` / `\r`). */
  title: string;
  category: string;
  categoryStyle: CategoryStyle;
  /** Shown after the fixed label `Role:` — use consistent title-style wording (e.g. "Executive Producer"). */
  role: string;
  roleIcon: string;
  description: string;
  tags: string[];
  videoUrl: string;
  titleAccent: TitleAccent;
  sectionTone: ProjectSectionTone;
  /** Optional shadow tint hint to mirror reference cards */
  shadowVariant?: "neutral" | "primary" | "tertiary";
};

export const projects: ProjectItem[] = [
  {
    id: "mcdonalds-hell",
    title: "McDonalds:\nThis is Hell II",
    category: "Commercial",
    categoryStyle: "commercial",
    role: "Executive Producer",
    roleIcon: "movie_edit",
    description:
      "A fast-paced branded film driven by chaotic humor and sharp visual rhythm.",
    tags: ["4K", "FAST CUT", "COMEDY"],
    videoUrl: "https://www.youtube.com/watch?v=prQtL3J1ICE",
    titleAccent: "primary",
    sectionTone: "low",
    shadowVariant: "neutral",
  },
  {
    id: "ampm-ai-delivery",
    title: "AMPM:\nAI Delivery",
    category: "Commercial",
    categoryStyle: "commercial",
    role: "Executive Producer",
    roleIcon: "movie_edit",
    description:
      "A futuristic branded film exploring fast delivery through an AI-driven urban experience.",
    tags: ["4K", "FUTURISTIC", "INNOVATIVE"],
    videoUrl: "https://www.youtube.com/watch?v=H9UL9G6qfW4",
    titleAccent: "secondary",
    sectionTone: "default",
    shadowVariant: "primary",
  },
  {
    id: "ampm-city-market",
    title: "am:pm City Market",
    category: "Commercial",
    categoryStyle: "commercial",
    role: "Executive Producer",
    roleIcon: "movie_edit",
    description:
      "A dynamic city-driven campaign blending speed, accessibility, and modern urban lifestyle.",
    tags: ["4K", "URBAN", "INNOVATIVE"],
    videoUrl: "https://www.youtube.com/watch?v=pGXlXBxRd_E",
    titleAccent: "tertiary",
    sectionTone: "high",
    shadowVariant: "tertiary",
  },

  /*
  // Example: Google Drive (public / “anyone with link” video; replace FILE_ID)
  {
    id: "sample-drive-reel",
    title: "Client:\nDrive-hosted reel",
    category: "Commercial",
    categoryStyle: "commercial",
    role: "Director",
    roleIcon: "movie_edit",
    description: "Short description for this reel.",
    tags: ["TAG ONE", "TAG TWO"],
    videoUrl: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
    titleAccent: "primary",
    sectionTone: "default",
    shadowVariant: "neutral",
  },
  */
];