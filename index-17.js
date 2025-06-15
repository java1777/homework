const productWrapper = document.getElementById('productWrapper');
const loadMoreBtn = document.getElementById('loadMoreBtn');
let allProducts = [];
const initialDisplayCount = 4;
let displayedCount = initialDisplayCount;

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    allProducts = data.products;
    displayProducts(allProducts.slice(0, initialDisplayCount));
    if (allProducts.length <= initialDisplayCount) {
      loadMoreBtn.style.display = 'none';
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p id='price1'>Price: $${product.price}</p>
            <p>About: ${product.description.slice(0,50)}.</p>
        `;
    productWrapper.appendChild(productCard);
  });
}

loadMoreBtn.addEventListener('click', () => {
  displayProducts(allProducts.slice(displayedCount));
  displayedCount = allProducts.length;
  loadMoreBtn.style.display = 'none';
});

fetchProducts();
