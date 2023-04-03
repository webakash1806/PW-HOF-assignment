let items = {
    item1: 50,
    item2: 18,
    item3: 38
}

Object.keys(items).map(function (key) {
    let b = { [key]: items[key] * 80 }
    console.log(b);
})
