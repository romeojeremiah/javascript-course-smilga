class Counter {
    constructor(element, value) {
        this.element = element;
        this.value = value;

        this.btnDecrease = element.querySelector(".decrease");
        this.btnReset = element.querySelector(".reset");
        this.btnIncrease = element.querySelector(".increase");
        this.DOMvalue = element.querySelector(".value");
        this.DOMvalue.textContent = value;
        //bind 'this' to the counter object
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.reset = this.reset.bind(this);

        this.btnDecrease.addEventListener("click", this.decrease);
        this.btnIncrease.addEventListener("click", this.increase);
        this.btnReset.addEventListener("click", this.reset);
    }

    decrease() {
        this.value--;
        this.DOMvalue.textContent = this.value;
    }
    reset() {
        this.value = 0;
        this.DOMvalue.textContent = this.value;
    }
    increase() {
        this.value++;
        this.DOMvalue.textContent = this.value;
    }
}

function getElement(selection) {
    const element = document.querySelector(selection); //evaluates to either truthy or null (falsey);
    if (element) {
        return element;
    } else {
        throw new Error(
            `Please check "${selection}" selector, no such element exists.`
        );
    }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
