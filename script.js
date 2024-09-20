const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')


if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })

  if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active')
    })
  }
}

//ADD TO CART POP-UP FUNCTION
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    alert("Item added to cart!");
  });
});
