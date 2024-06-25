import { StatusUpdateItem } from "../models/StatusUpdateItem";

export const FAKE_STATUS_UPDATES: StatusUpdateItem[] = [
    {
        id: 0,
        name: '0th Status Update',
        status: 'I was born.',
        date: new Date(2000, 7, 18)
    },
    {
        id: 1,
        name: '1st Status Update',
        status: 'This is a sample 1st status update',
        date: new Date(2024, 5, 24)
    },
    {
        id: 2,
        name: '2nd Status Update',
        status: 'This is a sample 2nd status update',
        date: new Date(2024, 5, 24)
    },
    {
        id: 1.5,
        name: '1.5th Status Update',
        status: 'This is a sample 1.5th status update',
        date: new Date(2010, 11, 31)
    }
];