// Carrinho de compras
let cartItems = [];

// Função para adicionar um item ao carrinho
function addToCart(item) {
  cartItems.push(item);
}

// Função para calcular o preço total do carrinho
function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    totalPrice += item.price;
  }
  return totalPrice;
}

// Função para validar o formulário de pedido
function validateForm() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  if (name === '' || address === '' || phone === '') {
    alert('Por favor, preencha todos os campos do formulário.');
    return false;
  }

  return true;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn-add-cart');
  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      const item = {
        name: event.target.getAttribute('data-item'),
        price: parseFloat(event.target.parentElement.querySelector('.price').innerText.replace('R$ ', '')),
      };
      addToCart(item);
      alert('Item adicionado ao carrinho!');
    });
  });

  const form = document.getElementById('order-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      const totalPrice = calculateTotalPrice();
      alert(`Pedido enviado com sucesso! Total: R$ ${totalPrice.toFixed(2)}`);
      form.reset();
      cartItems = [];
    }
  });
});
