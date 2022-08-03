export const displayBtns = (container, paginated, pageIndex) => {
    const btns = paginated.map((_, index) => {
        return `<button class="btn btn-number ${
            pageIndex === index ? "btn-active" : "null"
        }" data-id=${index}>${index + 1}</button>`;
    });

    btns.push(`<button class="btn btn-next">next</button>`);
    btns.unshift(`<button class="btn btn-prev">prev</button>`);

    container.innerHTML = btns.join("");
};
