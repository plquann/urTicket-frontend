export const classifyDesc = (classify) => {
    switch (classify) {
        case 'C18':
            return 'Persons under age 18 not admitted.';
        case 'C16':
            return 'Persons under age 16 not admitted.';
        case 'C13':
            return 'Some material may be inappropriate for children under 13.';
        default:
            return 'Suitable for all ages.';
    }
};
