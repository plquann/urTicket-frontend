import axiosClient from './axiosClient';

const ticketAPI = {
    getTicketsByShowtime: (showtimeId) => {
        const url = `/tickets/showtime/${showtimeId}`;

        return axiosClient.get(url);
    },

}
export default ticketAPI;