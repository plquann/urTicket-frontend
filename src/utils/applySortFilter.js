import { filter } from 'lodash';

export const applySortFilter = (array, comparator, query) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_item) => {
            const item = _item.userName ?? _item.title ?? _item.movie.title;
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
        });
    }
    return stabilizedThis.map((el) => el[0]);
}