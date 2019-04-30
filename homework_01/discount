const item = {
    "name": "Avocado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
}

function applyCoupon1(item,discount){
    console.log(item);
    console.log(discount);
    console.log(1-discount/100);
    item.price = item.price * (1-discount/100);
    return item;
}

applyCoupon = (n) => ( (m)=> applyCoupon1(n,m));

console.log(applyCoupon(item)(10).price===180)