// function Counter(element, value) {
//     this.element = element;
//     this.value = value;
//     this.btnDecrease = element.querySelector(".decrease");
//     this.btnReset = element.querySelector(".reset");
//     this.btnIncrease = element.querySelector(".increase");
//     this.DOMvalue = element.querySelector(".value");
//     this.DOMvalue.textContent = value;
//     //bind 'this' to the counter object
//     this.decrease = this.decrease.bind(this);
//     this.increase = this.increase.bind(this);
//     this.reset = this.reset.bind(this);

//     this.btnDecrease.addEventListener("click", this.decrease);
//     this.btnIncrease.addEventListener("click", this.increase);
//     this.btnReset.addEventListener("click", this.reset);
// }

// Counter.prototype.decrease = function () {
//     this.value--;
//     this.DOMvalue.textContent = this.value;
// };
// Counter.prototype.reset = function () {
//     this.value = 0;
//     this.DOMvalue.textContent = this.value;
// };
// Counter.prototype.increase = function () {
//     this.value++;
//     this.DOMvalue.textContent = this.value;
// };
