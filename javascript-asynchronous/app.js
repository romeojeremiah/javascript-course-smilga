//Using an XHR object

const xhr = new XMLHttpRequest();

xhr.open("GET", "./api/sample.txt");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const pEl = document.createElement("p");
        pEl.textContent = xhr.responseText;
        console.log(pEl);
        document.querySelector(".container").appendChild(pEl);
    } else {
        console.log("error");
    }
};
xhr.send();
