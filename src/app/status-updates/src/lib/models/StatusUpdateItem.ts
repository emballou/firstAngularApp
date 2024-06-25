/**
 * Status Update Item Model
 */
export interface StatusUpdateItem {
    id: number;
    name?: string;
    status?: string;
    song?: string;
    date: Date;
}