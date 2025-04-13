import {User} from "./user";

export class Request {
    id: number;
    username: string;
    title: string;
    description: string;
    device: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    createdAt: Date;
    technicianId?: number;

    constructor(id: number, username: string, title: string, description: string, device: string, status: 'Pending' | 'In Progress' | 'Completed', createdAt: Date) {
        this.id = id;
        this.username = username;
        this.title = title;
        this.description = description;
        this.device = device;
        this.status = status;
        this.createdAt = createdAt;
    }
}

const requests: Request[] = []
requests.push(new Request(1, "example_elek", "Laptop Repair", "My laptop is not turning on.", "Laptop", "Pending", new Date("2025-04-12T10:00:00Z")))
requests.push(new Request(2, "example_elek", "Phone Repair", "My phone screen is cracked.", "Phone", "In Progress", new Date("2025-04-13T10:00:00Z")))