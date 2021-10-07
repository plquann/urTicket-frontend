import React from 'react';
import dateFormat from 'dateformat';
import './BookingSummary.scss';

export default function BookingSummary({ showtime, tickets, products }) {
    const { movie, theater } = showtime;
    const totalTicket = tickets.reduce((total, ticket) => {
        return total + ticket.price
    }, 0);
    const totalProduct = products.reduce((total, product) => {
        return total + product.quantity * product.price
    }, 0);

    return (
        <div className="summary">
            <h3 className="summary__title">BOOKING SUMMARY</h3>

            <ul className="summary__ticket">
                <li className="title">{movie?.title}</li>
                <li className="justify-between text-lg">
                    <span className="font-semibold">{theater?.name}</span>
                    <span>Room {showtime?.room}</span>
                </li>
                <li className="justify-between">
                    <span className="text-sm" style={{ color: '#9aace5' }}>{dateFormat(showtime?.startTime, "mmmm d, yyyy, HH:MM")}</span>
                    <span className="font-semibold text-lg">
                        {tickets.map(ticket => `${ticket.seat.row}${ticket.seat.column}`).join(' ')}
                    </span>
                </li>
                <li className="total">${totalTicket}</li>
            </ul>

            <ul className="summary__food">
                <li className="title">FOOD & BEVERAGE</li>
                {products.map(product => (
                    <li key={product.id} className="justify-between text-lg">
                        <span>{`${product.quantity} x ${product.name}`}</span>
                        <span className="">${product.quantity * product.price}</span>
                    </li>
                ))}
                <li className="total">${totalProduct}</li>
            </ul>

            <div className="summary__amount" >
                <div className="payment text-green-400 mt-3">
                    <span>AMOUNT PAYABLE</span>
                    <span>${(totalProduct+ totalTicket)/100*110}</span>
                </div>
            </div>
        </div>
    )
}
