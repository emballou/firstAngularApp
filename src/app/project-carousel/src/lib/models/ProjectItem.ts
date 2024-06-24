import { ProjectLinkItem } from "./ProjectLinkItem";

/**
 * Project Item Model
 */
export interface ProjectItem {
    name: string;
    description: string;
    links: ProjectLinkItem[];
    skills: string[];
    images: string[];
    hidden?: boolean;
}