JavaScript

const buttons = document.querySelectorAll(
  ".filters button"
);

const products = document.querySelectorAll(
  ".product"
);

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const category = button.dataset.category;

    products.forEach(function(product) {
      if (
        category === "all" ||
        product.dataset.category === category
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
