import BookingSummary from 'features/Booking/components/BookingSummary'
import Screen from 'features/Booking/components/Screen'
import React, { Fragment } from 'react'
import Header from './components/Header/'

export default function Booking() {
    // const [scrolled, setScrolled] = useState(false);

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > 200) {
    //         setScrolled(true);
    //     }
    //     else {
    //         setScrolled(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // }, []);

    return (
        <div style={{ backgroundColor: 'var(--color-secondary)' }}>
            <Header />
            <div className="booking max-w-screen-xl mx-auto grid grid-cols-3 gap-4 pb-8">
                <div className="col-span-2">
                    <Screen />
                </div>
                <div className="mt-10 place-self-center">
                    <BookingSummary />
                </div>
            </div>
        </div>
    )
}
