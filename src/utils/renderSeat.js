export const initArr = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
        arr.push(i + 1);
    }

    return [...arr];
}