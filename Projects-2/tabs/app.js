const articleContainer = document.querySelector(".article-container");
const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".content");

articleContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
        //remove active from all btns
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach(function (article) {
            article.classList.remove("active");
            const content = document.getElementById(id);
            content.classList.add("active");
        });
    }
});
