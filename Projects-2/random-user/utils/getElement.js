export function getElement(element) {
    const el = document.querySelector(element);
    if (el) {
        return el;
    }
    throw new Error("No such element exist");
}
