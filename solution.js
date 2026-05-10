const API_URL = "http://localhost:8080/api/v1/products";

//1.
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        //2.
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("404: Products endpoint not found.");
            } else if (response.status === 500) {
                throw new Error("500: Server error. Please try again later.");
            } else {
                throw new Error(`Unexpected error: ${response.status}`);
            }
        }
        const products = await response.json();
        //3.
        renderProducts(products);
    } catch (error) {
        console.error("Failed to fetch products:", error.message);
        renderError(error.message);
    }
}

function renderProducts(products) {
    const grid = document.getElementById("product-grid");
    //For empty state
    if (products.length === 0) {
        grid.innerHTML = `<p class="empty-state">No products available at the moment.</p>`;
        return;
    }

    grid.innerHTML = products.map(product => `
        <article>
            <img src="${product.imageUrl || 'tshirt.jpg'}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description || ''}</p>
            <p><b>₱${product.price}</b></p>
            <a href="datails.html">View Details</a>
        </article>
    `).join("");
}

function renderError(message) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = `<p class="empty-state">Error loading products: ${message}</p>`;
}

//3.
fetchProducts();