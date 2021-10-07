import React from 'react';
import './BookingDirectional.scss'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function BookingDirect() {
    const { pickedSeats, nextStep, showtimeInfo } = useSelector(state => state.booking);

    const handleNextStepDisable = () => {
        toast.error('Please pick some seats!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
        });
    }

    return (
        <>
            <div className="booking-directional pt-4" >
                <div className="flex justify-center">
                    {pickedSeats.length
                        ? <button className="item md-order-1" >
                            <Link to={`/booking/${showtimeInfo.id}/${nextStep}`} className="text-2xl font-semibold">
                                NEXT
                            </Link>
                        </button>
                        : <button className="item md-order-1" onClick={handleNextStepDisable}>
                            <span className="text-2xl font-semibold">NEXT</span>
                        </button>
                    }
                </div>
            </div>
            <ToastContainer limit={3} />
        </>
    )
}
