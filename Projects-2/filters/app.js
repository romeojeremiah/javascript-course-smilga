//display products
const productsContainer = document.querySelector(".products-container");
const companyContainer = document.querySelector(".companies");
const inputValues = document.querySelector(".search-input");

let filteredProducts = [...products]; //make a copy of products array
let companies = [...products];

// Functions

const displayCompanies = function () {
    companiesBtns = [
        "all",
        ...new Set(companies.map((company) => company.company)),
    ];
    filterBtns = companiesBtns
        .map(
            (companyBtn) =>
                `<button data-id="${companyBtn}" class="company-btn">${companyBtn}</button>`
        )
        .join("");
    companyContainer.innerHTML = filterBtns;
};

const displayProducts = function (filteredProducts) {
    filteredProducts = filteredProducts
        .map(function (product) {
            const { id, title, image, price } = product;
            return `<article data-id="${id} class="product">
                    <img
                        src=${image}
                        alt=""
                        class="product-img img"
                    />
                    <footer>
                        <h5 class="product-name">${title}</h5>
                        <span class="product-price">$${price}</span>
                    </footer>
                </article>`;
        })
        .join("");

    if (filteredProducts.length < 1) {
        filteredProducts = `<h2>No items match filter</h2>`;
    }

    productsContainer.innerHTML = filteredProducts;
};

// Main

displayProducts(filteredProducts);
displayCompanies();

// Event Listeners

inputValues.addEventListener("keyup", function (e) {
    let filtered = filteredProducts.filter((product) =>
        product.title.includes(e.target.value)
    );

    displayProducts(filtered);
});

companyContainer.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.dataset.id === "all") {
        filteredProducts = [...products];
        displayProducts(products);
        return;
    }

    filteredProducts = products.filter(
        (product) => product.company === e.target.dataset.id
    );
    displayProducts(filteredProducts);
    inputValues.value = "";
});
