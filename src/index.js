const fs = require('fs');
const { formatDateLanguange } = require('onedionys-date-languange');
const { formatNumberLanguange } = require('onedionys-number-languange');

function shopBuilder(number = 1) {
    const productsJson = fs.readFileSync('./src/product.json', 'utf8');
    const products = JSON.parse(productsJson);
    const randomIndices = [];

    for (let i = 0; i < number; i++) {
        const randomIndex = Math.floor(Math.random() * products.length);
        randomIndices.push(randomIndex);
    }

    const randomProducts = randomIndices.map(index => {
        const product = products[index];
        const updatedProduct = { ...product };

        const created_at_format = formatDateLanguange(products[index].created_at, 'en');
        updatedProduct.created_at_format = created_at_format;

        const reorderedProductByPrice = {};
        Object.keys(updatedProduct).forEach(key => {
            if (key === 'qty') {
                reorderedProductByPrice.created_at_format = updatedProduct.created_at_format;
            }
            reorderedProductByPrice[key] = updatedProduct[key];
        });

        const price_format = formatNumberLanguange(products[index].price, 'en', 'Dollar');
        updatedProduct.price_format = price_format;

        const reorderedProductByCreatedAt = {};
        Object.keys(updatedProduct).forEach(key => {
            if (key === 'qty') {
                reorderedProductByCreatedAt.price_format = updatedProduct.price_format;
            }
            reorderedProductByCreatedAt[key] = updatedProduct[key];
        });

        return reorderedProductByCreatedAt;
    });

    return randomProducts;
}

module.exports = { shopBuilder };
