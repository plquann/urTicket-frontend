import axiosClient from './axiosClient';

const reservationsAPI = {
    getReservationsByUser: (userId) => {
        const url = `/reservations/user/${userId}`;
        return axiosClient.get(url);
    },
    getReservationsById: (reservationId) => {
        const url = `/reservations/${reservationId}`;
        return axiosClient.get(url);
    },
    createReservation: (reservation) => {
        const url = '/reservations';
        return axiosClient.post(url, reservation);
    }
}
export default reservationsAPI;