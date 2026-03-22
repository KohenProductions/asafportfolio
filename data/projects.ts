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
  {
    id: "bridal-fashion-campaign",
    title: "Bridal Fashion\nCampaign",
    category: "Fashion Film",
    categoryStyle: "brand-film",
    role: "Editor",
    roleIcon: "movie_edit",
    description:
      "A refined bridal fashion campaign combining cinematic storytelling with modern aesthetics. Created for multi-platform distribution across TV, web, and social, the project blends both horizontal and vertical formats to deliver a cohesive visual language.",
    tags: ["FASHION", "BRIDAL", "MULTI FORMAT"],
    videoUrl: "https://drive.google.com/file/d/1qa8OOv4ttEBaQOOWPuX6UE7WdhWLpEBi/view?usp=sharing",
    titleAccent: "secondary",
    sectionTone: "default",
    shadowVariant: "primary",
  },
  {
    id: "dhl-israel-film",
    title: "DHL Israel\nBrand Film",
    category: "Brand Film",
    categoryStyle: "brand-film",
    role: "Editor",
    roleIcon: "movie_edit",
    description:
      "A corporate brand film telling the story of DHL Israel and its ongoing contribution to the Israeli community. Edited for Kohen Productions, the film highlights the company’s scale, values, and continuous impact.",
    tags: ["CORPORATE", "BRAND FILM", "STORYTELLING"],
    videoUrl: "https://drive.google.com/file/d/1WrRRdr9JBp2DPK5idcZIabLFaS3NnYc_/view?usp=sharing",
    titleAccent: "primary",
    sectionTone: "default",
    shadowVariant: "neutral",
  },
  {
    id: "chivas-fantastic",
    title: "Chivas Regal\nExperience",
    category: "Brand Film",
    categoryStyle: "brand-film",
    role: "Editor",
    roleIcon: "movie_edit",
    description:
      "A refined brand film created for Chivas Regal in collaboration with the Fantastic restaurant in Tel Aviv. The project captures a curated evening of elegance, flavor, and atmosphere — blending premium whisky culture with a contemporary culinary experience. Edited for Kohen Productions.",
    tags: ["LUXURY", "WHISKY", "CULINARY"],
    videoUrl: "https://drive.google.com/file/d/1YArOvJ5K8dM2AB37jXQxsGK_uOfUpBrV/view?usp=sharing",
    titleAccent: "tertiary",
    sectionTone: "default",
    shadowVariant: "tertiary",
  },
  {
    id: "glenfiddich-campaign",
    title: "Glenfiddich\nCampaign",
    category: "Brand Film",
    categoryStyle: "brand-film",
    role: "Editor & Creative",
    roleIcon: "movie_edit",
    description:
      "A premium brand film for Glenfiddich, crafted to reflect the brand’s heritage, precision, and timeless character. The project blends refined visual language with a strong creative direction, delivering a cinematic interpretation of modern whisky culture. Edited and creatively developed for Kohen Productions.",
    tags: ["LUXURY", "WHISKY", "CINEMATIC"],
    videoUrl: "https://drive.google.com/file/d/1MzQZrf0XsAMT73SLmc2sDgX8gfYcC6qI/view?usp=sharing",
    titleAccent: "primary",
    sectionTone: "default",
    shadowVariant: "primary",
  }
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