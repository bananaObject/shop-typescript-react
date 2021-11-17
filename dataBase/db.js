const {join} = require('path');
const fs = require('fs');
const faker = require('faker');

module.exports = () => {
    const data = {
        catalogItems: [],
        orderShip: {},
        checkAddress: [{
            city: ['moscow'],
            state: ['moscow'],
            zipcode: ['111111']
        }],
        registration: {
            firstName: null,
            lastName: null,
            gender: null,
            email: null,
            password: null
        }
    };

    const testFolder = join(__dirname, '../public/images/good');
    const array = fs.readdirSync(testFolder);
    const arrayCategory = [];
    const randomBoolean = () => {
      return Math.random() < 0.35;
    };

    for (let i = 1; i <= 200; i++) {
        data.catalogItems.push(
            {
                'id': i,
                'img': {
                    src: `/images/good/${array[Math.floor(Math.random() * array.length)]}`,
                    width: '360',
                    height: '420',
                    alt: 'product'
                },
                size:{
                    l: randomBoolean(),
                    m: randomBoolean(),
                    s: randomBoolean(),
                    xs: randomBoolean()
                },
                category:{

                },
                'heading': faker.lorem.words(),
                'text': 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                'price': Number(faker.commerce.price())
            });
    }

    return data;
};
