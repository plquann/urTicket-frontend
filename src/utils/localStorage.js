export function loadUserData() {
    try {
        const serializedUserData = localStorage.getItem('user');
        if (!serializedUserData) return undefined;

        return JSON.parse(serializedUserData);
    } catch (err) {
        return undefined;
    }
}
