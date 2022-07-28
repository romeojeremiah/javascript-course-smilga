// const moment = require("./moment");

const toggleBtn = document.querySelector(".btn");
const articleSection = document.querySelector(".articles");
const data = articles; // data from articles "api"

toggleBtn.addEventListener("click", () => {
    //add dark theme to document
    document.querySelector(":root").classList.toggle("dark-theme");
});

const domArticles = data
    .map((article) => {
        let { title, date, length, snippet } = article;
        date = moment(date).format("MMMM Do, YYYY");
        return `<article class="post">
                        <h2>${title}</h2>
                        <div class="post-info">
                            <span>${date}</span>
                            <span>${length} min read</span>
                        </div>
                        <p>${snippet}</p>
                    </article>`;
    })
    .join("");

articleSection.innerHTML = domArticles;
