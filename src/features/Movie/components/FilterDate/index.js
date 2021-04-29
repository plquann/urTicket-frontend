import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FilterDate() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className=" w-4/5 h-auto p-8 rounded mt-12" style={{ backgroundColor: "#032055" }}>
            <p className="text-lg font-semibold uppercase border-b border-solid pb-4 mb-4" style={{ borderColor: "#1f2b72" }}>Release Date</p>
            <div className="mb-3">
                <p className="mb-2 font-medium uppercase text-sm">From</p>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="bg-transparent border solid border-gray-600 p-1 rounded-md text-center focus:outline-none"
                    placeholderText="Click to select a date"
                />
            </div>
            <div className="mb-3">
                <p className="mb-2 font-medium uppercase text-sm">To</p>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="bg-transparent border solid border-gray-600 p-1 rounded-md text-center focus:outline-none"
                    placeholderText="Click to select a date"
                />
            </div>
        </div>

    );
}
