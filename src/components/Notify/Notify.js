import React from 'react';
import Loading from 'components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

const handleToast = (type, msg) => {
    toast(msg, { type: type });
}
export default function Notify({ status }) {
    return (
        <div className="notify-alert">
            {status.loading && <Loading />}
            {
                status.error && handleToast(toast.TYPE.ERROR, status.message)
            }
            {
                status.success && handleToast(toast.TYPE.SUCCESS, status.message)
            }
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
                theme={'colored'}
            />
        </div>
    )
}