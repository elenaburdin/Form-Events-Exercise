const form = document.querySelector('form');
const list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const qtys = document.querySelector('#qty');
    const products = document.querySelector('#product');
    const newLI = document.createElement('LI');
    newLI.innerText = qtys;
    newLI.innerText = products;
    list.append(newLI);
    newLI.innerText = `${qtys.value} ${products.value}`
    qtys.value = "";
    products.value = "";
})
