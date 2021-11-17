type logoType = 'car' | 'sale' | 'crown'

class ConfigCLass {
    logo:logoType;
    heading:string;
    text= 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.';

    constructor(logo:logoType,heading:string) {
        this.logo= logo;
        this.heading= heading;
    }
}

export const configFunc = () :ConfigCLass[]=> {
    return [
        new ConfigCLass('car', 'Free Delivery'),
        new ConfigCLass('sale', 'Sales & discounts'),
        new ConfigCLass('crown', 'Quality assurance'),
    ];
};
