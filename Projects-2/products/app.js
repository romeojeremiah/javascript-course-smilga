const productsContainer = document.querySelector(".products-center");

const url = "https://course-api.com/javascript-store-products";

const displayProducts = () => {
    productsContainer.innerHTML = `<div class="loading"></div>`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const products = data
                .map((product) => {
                    const { id } = product;
                    const { price, name: title } = product.fields;
                    const { url: img } = product.fields.image[0];

                    return `<a href="product.html?id=${id}" class="single-product">
                    <img
                        src="${img}"
                        alt="${title}"
                        class="single-product-img img"
                    />
                    <footer>
                        <h5 class="name">${title}</h5>
                        <span class="price">${price / 100}</span>
                    </footer>
                </a>`;
                })
                .join("");
            productsContainer.innerHTML = products;
        })
        .catch((error) => {
            productsContainer.innerHTML = error;
        });
};

displayProducts();
