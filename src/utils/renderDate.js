export const listDay = () => {
    const arrDays = [];
    const day = new Date();
    let dayFormat = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    arrDays.push(new Date(dayFormat));

    for (let i = 0; i < 5; i++) {
        dayFormat.setDate(dayFormat.getDate() + 1);
        arrDays.push(new Date(dayFormat));
    }
    return [...arrDays];
};