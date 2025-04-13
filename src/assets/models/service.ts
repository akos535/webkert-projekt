export class Service{
    serviceID: number;
    serviceName: string;
    price: number;
    estimatedTime: number;

    constructor(serviceID: number, serviceName: string, price: number, estimatedTime: number) {
        this.serviceID = serviceID;
        this.serviceName = serviceName;
        this.price = price;
        this.estimatedTime = estimatedTime;
    }
}

const services: Service[] = [];
services.push(new Service(1, "Laptop Screen Repair", 70000, 4));
services.push(new Service(2, "Phone Screen Repair", 40000, 2));