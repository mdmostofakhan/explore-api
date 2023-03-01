const user = {id: 34, name: 'gorib Amir', job: 'actor'}
// Javascript object Notation (JSON)
const sringifiend = JSON.stringify(user);
// console.log(user);
// console.log(sringifiend);

const shop = {
    name: 'Mostofa',
    id: 34,
    address: {
        street: 'Tejgaon',
        city: 'Dhaka',
        country: 'bangladesh',
    },
    products: ['laptop', 'mobile', 'keybord', 'mouse'],
    fish: 'chitol mas',
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopFiend = JSON.stringify(shop);
console.log(shopFiend);
const shopObj = JSON.parse(shopFiend);
console.log(shopObj);