export const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
};
export const setLocalStorage = (name, list) => {
    localStorage.setItem(name, JSON.stringify(list))
}
