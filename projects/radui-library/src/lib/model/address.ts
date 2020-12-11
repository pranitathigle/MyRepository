export class Address {
    addressLine1: string;
    city: string;
    state: string;
    zipCode: string;
    name1?: string;
    name2?: string;
    name3?: string;
    constructor(options?: {
         addressLine1: string;
         city: string;
         state: string;
         zipCode: string;
         name1?: string;
        name2?: string;
        name3?: string;
    }){
        if(options) {
            this.addressLine1 = options.addressLine1 && options.addressLine1.trim();
            this.city = options.city && options.city.trim();
            this.state = options.state && options.state.trim();
            this.zipCode = options.zipCode && options.zipCode.trim();
            this.name1 = options.name1 && options.name1.trim();
            this.name2 = options.name2 && options.name2.trim();
            this.name3 = options.name3 && options.name3.trim();
        }

    }
}