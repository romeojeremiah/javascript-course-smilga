const numbers = [...document.querySelectorAll(".number")];

numbers.forEach((number) => {
    let initialValue = 0;
    const update = setInterval(function () {
        let updatedValue = (initialValue += 1);

        if (updatedValue > parseInt(number.dataset.id)) {
            clearInterval(update);
            return;
        }
        number.textContent = `${updatedValue}+`;
    }, 1);
});
