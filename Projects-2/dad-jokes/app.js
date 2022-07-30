const btn = document.querySelector(".btn");
const resultContainer = document.querySelector(".result");
const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", () => {
    fetchJoke();
});

async function fetchJoke() {
    resultContainer.textContainer = "Loading...";

    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "getting a joke",
            },
        });
        const data = await response.json();
        resultContainer.textContent = data.joke;
    } catch (error) {
        resultContainer.textContent = "There was an error...";
    }
}

fetchJoke();
