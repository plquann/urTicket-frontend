import React from 'react';
import SingleSelect from 'components/SingleSelect/SingleSelect';


const cinema = [
    { value: 'cgv', label: 'cgv Tran Quang Khai' },
    { value: 'lotte', label: 'lotte' },
    { value: 'bhd', label: 'bhd' }
];
const date = [
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' }
];

const showtimes = [
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' }
];

const handleChange = () => {
    console.log("Hii change ")
}

export default function BookingReference() {
    return (
        <section className="booking-reference-section pt-8 px-6">
            <div className="w-full mx-auto ">
                <div className="booking-reference-section__item grid grid-cols-3 gap-6">
                    <div className="booking-reference-section__item__cinema">
                        <SingleSelect
                            defaultValue={cinema[0]}
                            onChange={handleChange}
                            options={cinema}
                            placeholder={"Select Cinema"}
                            backgroundColor={"#06121e"}
                        />
                    </div>
                    <div className="booking-reference-section__item__date">
                        <SingleSelect
                            defaultValue={date[0]}
                            onChange={handleChange}
                            options={date}
                            placeholder={"Select Date"}
                            backgroundColor={"#06121e"}
                        />
                    </div>
                    <div className="booking-reference-section__item__showtime">
                        <SingleSelect
                            defaultValue={showtimes[0]}
                            onChange={handleChange}
                            options={showtimes}
                            placeholder={"Select Time"}
                            backgroundColor={"#06121e"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
