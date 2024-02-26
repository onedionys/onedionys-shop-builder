const assert = require('assert');
const { shopBuilder } = require('../src/index');

describe('Shop Builder', function() {
    it('should return array list of product', function() {
        const randomProducts = shopBuilder(10);
        console.log(randomProducts);
    });
});
