/**
 * Page Item Model
 */
export interface PageItem {
    title: string;
    link: string;
    underConstruction?: boolean;
    hidden?: boolean;
    disabled?: boolean;
}