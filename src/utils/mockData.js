import faker from 'faker'

export function mockProducts(amount) {
    let result = [];
    for (let i = 1; i <= amount; i++){
        var name = faker.commerce.productName();
        var price = faker.finance.amount();
        var number = faker.datatype.number();
        result.push({
            id: i, name: name, price: price, number: number, selectedAmount: 1
        })
    }
    return result;
}