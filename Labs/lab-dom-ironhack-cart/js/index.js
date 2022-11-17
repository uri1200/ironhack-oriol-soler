// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //declaramos variables del html
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  //console.log(price, quantity);
  //cogemos el valor del precio
  const priceValue = parseFloat(price.innerText);
  //Cogemos cantidad
  const quantityValue = quantity.valueAsNumber;
  //calculamos precio
  const subtotalValue = priceValue * quantityValue;
  //inyectamos precio
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = subtotalValue;
  //retornamos el valor
  return subtotalValue;
}

function calculateAll() {
  // cogemos todos los productos
  const products = document.querySelectorAll('.product');
  //inicializamos a 0 el total
  let totalValue = 0;
  //sumamos todos los subtotales de cada producto
  for (let product of products) {
    totalValue += updateSubtotal(product)
  }
  // 
  document.querySelector('#total-value span').innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  event.currentTarget.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput =  createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
      <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button onclick="removeProduct(event)" class="btn btn-remove">Remove</button>
    </td>`;

    const parent = document.querySelector("#cart tbody")
    parent.appendChild(newTableRow);
    const removeBtn = newTableRow.querySelector('.btn-remove');
    removeBtn.addEventListener('click', calculateAll);

    newProdNameInput.value= '';
    newProdPriceValue.value = 0;
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove button job
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', event =>{
      removeProduct(event);
    })
  });

  //Create products job
  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
