// *** toggleLoading.js ***
import get from "./getElement.js";

export const toggleLoading = (loadClass) => {
    const loading = get(".loading");
    loading.classList.add(loadClass);
};
