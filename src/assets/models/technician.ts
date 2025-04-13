export class Technician {
    id: number;
    name: string;
    expertise: string[];

    constructor(id: number, name: string, expertise: string[]) {
        this.id = id;
        this.name = name;
        this.expertise = expertise;
    }
}

const technicians: Technician[] = [];
technicians.push(new Technician(1, "Technician Tibor", ["Laptop"]));
technicians.push(new Technician(2, "Technician Tamás", ["Phone"]));
technicians.push(new Technician(3, "Technician Tóbiás", ["Laptop", "Phone"]));