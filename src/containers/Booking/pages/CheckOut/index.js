import React from 'react';
import Page from 'components/Page/Page'
import { useSelector } from 'react-redux';
import BookingSummary from 'containers/Booking/components/BookingSummary/BookingSummary'
import Payment from 'containers/Booking/components/Payment/Payment'


export default function CheckOut() {
    const { showtimeInfo, pickedSeats, products } = useSelector(state => state.booking);
    const totalTicket = pickedSeats.reduce((total, ticket) => {
        return total + ticket.price
    }, 0);
    const totalProduct = products.reduce((total, product) => {
        return total + product.quantity * product.price
    }, 0);

    
    const paymentData = {
        showtimeId: showtimeInfo.id,
        tickets: pickedSeats.map(ticket => ticket.id),
        products: products.map(product => ({ productId: product.id, quantity: product.quantity })),
        amount: (totalTicket+ totalProduct)
    }
    console.log('🚀 ~ file: index.js ~ line 24 ~ paymentData', paymentData);

    return (
        <Page title="CheckOut | UR-TICKET">
            <div className=" check-payment mt-16" >
                <div className="check-payment__title text-center my-5">
                    <h2 className="text-2xl font-bold uppercase mb-3 pt-4">Yeah! Almost finished</h2>
                    <p className="text-lg">We need your payment information to complete the booking</p>
                </div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4 mt-10">
                    <div className="col-span-2 ">
                        <Payment paymentData={paymentData} />
                    </div>
                    <div className="">
                        <BookingSummary
                            showtime={showtimeInfo}
                            tickets={pickedSeats}
                            products={products}
                        />
                    </div>
                </div>
            </div>
        </Page>
    )
}
