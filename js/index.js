// ITERATION 1
// const { product } = require('puppeteer');

function updateSubtotal(product) {
  const price = parseInt(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value);

  const subtotalValue = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = `${subtotalValue}`;

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
}

// ITERATION 2
function calculateAll() {
  const items = document.querySelectorAll('.product');
  items.forEach((product) => {
    updateSubtotal(product);
  });
}

// const products = document.getElementsByClassName('product');
// for (let i = 0; i < products.length; i++) {
//   updateSubtotal(products[i]);
// }

// ITERATION 3

const subtotalSum = document.querySelectorAll('.subtotal span');

let totalValue = 0;
subtotalSum.forEach((subtotal) => {
  return (totalValue += parseFloat(subtotal.innerHtml));
});
// console.log(totalValue);
const finalTotal = document.querySelector('#total-value span');
finalTotal.innerHTML = totalValue;

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
