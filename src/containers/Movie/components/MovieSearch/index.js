import React from 'react';
import Select, { components } from 'react-select';
import { THUMS, SEARCH_BG } from 'constants/image';
import './MovieSearch.scss';

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
    return (
        <ValueContainer {...props}>
            <Placeholder {...props} isFocused={props.isFocused}>
                {props.selectProps.placeholder}
            </Placeholder>
            {React.Children.map(children, child =>
                child && child.type !== Placeholder ? child : null
            )}
        </ValueContainer>
    );
};

const movie = [
    { value: 'Caption America', label: 'Caption America' },
    { value: 'One Piece', label: 'One Piece' },
    { value: 'Money Heist', label: 'Money Heist' }
]
const cinema = [
    { value: 'cgv', label: 'cgv' },
    { value: 'lotte', label: 'lotte' },
    { value: 'bhd', label: 'bhd' }
];
const date = [
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' }
]

const showtimes = [
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' }
]

const handleChange = () => {
    console.log("Hii change ")
}

const colourStyles = {
    control: provided => ({
        ...provided,
        backgroundColor: 'transparent',
        border: '1px solid rgba(163, 177, 198, 0.5)',
        color: '#ffffff',
        cursor: 'pointer',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#3f4b50 ' : 'transparent',
        cursor: 'pointer',
    }),
    menu: provided => ({
        ...provided,
        backgroundColor: '#1a222a',
        border: '1px solid rgba(163, 177, 198, 0.151)',
        textAlign: 'center',
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        overflow: "visible",
        padding: '7px 20px'
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#ffffff',
        overflow: 'hidden',
    }),
    input: (provided) => ({ ...provided, color: '#ffffff' }),
    placeholder: (provided, state) => {
        const isChanged = state.isFocused || state.hasValue ;
        return {
            ...provided,
            position: 'absolute',
            padding: '0 8px',
            top: isChanged ? 0 : "50%",
            color: isChanged ? '#31d7a9' : "#dbe2fb",
            transition: 'all 0.3s',
            backgroundColor: '#23282B',
            display: 'inline-block',
        }
    },
}

export default function MovieSearch() {
    return (
        <section className="search-ticket-section pt-20 mb-20 relative z-10">
            <div className="max-w-screen-lg mx-auto ">
                <div className="search-tab bg-img py-7 px-8 relative" >
                    <div className="grid grid-cols-2 mb-10">
                        <div className="search-ticket-header relative">
                            <h6 className="category text-lg mb-3 font-semibold uppercase" style={{ color: '#31d7a9' }}>
                                welcome to UR TICKET
                            </h6>
                            <h3 className="title text-2xl font-bold uppercase text-white">what are you looking for</h3>
                        </div>
                        <div className="button-booking justify-self-end relative">
                            <button className="btn-large">Booking Now</button>
                        </div>
                    </div>
                    <div className="tab-area p-8 relative border-t border-solid border-black mt-12 ">
                        <div className="tab-item">
                            <form className="ticket-search-form  grid grid-cols-5 gap-4">
                                <div className="ticket-search-form__movie col-span-2">
                                    {/* <input className="search__movie w-full relative " type="text" placeholder="Search fo Movies" /> */}
                                    <Select
                                        onChange={handleChange}
                                        options={movie}
                                        placeholder={"Select Movies"}
                                        components={{ ValueContainer: CustomValueContainer }}
                                        styles={colourStyles}
                                        blurInputOnSelect
                                    />
                                    {/* <button className="absolute top-0 right-0 w-10 h-10"><i className="fas fa-search" /></button> */}
                                </div>
                                <div className="ticket-search-form__cinema">
                                    {/* <select className="w-25 text-white text-lg py-2 px-3 border-none bg-transparent focus:outline-none" name="animals">
                                        {cinema.map((item, index) => {
                                            return <option value={item.value} key={index}>{item.value}</option>
                                        })}
                                    </select> */}
                                    <Select
                                        onChange={handleChange}
                                        options={cinema}
                                        placeholder={"Select Cinema"}

                                        styles={colourStyles}
                                    />
                                </div>
                                <div className="ticket-search-form__date">
                                    {/* <select className="w-25 text-white text-lg py-2 px-3 border-none bg-transparent focus:outline-none" name="animals">
                                        {date.map((item, index) => {
                                            return <option value={item.value} key={index}>{item.value}</option>
                                        })}
                                    </select> */}
                                    <Select
                                        onChange={handleChange}
                                        options={date}
                                        placeholder={"Select Date"}

                                        styles={colourStyles}
                                    />
                                </div>
                                <div className="ticket-search-form__showtime">
                                    {/* <select className="w-25 text-white text-lg py-2 px-3 border-none bg-transparent focus:outline-none" name="animals">
                                        {Showtimes.map((item, index) => {
                                            return <option value={item.value} key={index}>{item.value}</option>
                                        })}
                                    </select> */}
                                    <Select
                                        onChange={handleChange}
                                        options={showtimes}
                                        placeholder={"Select Time"}

                                        styles={colourStyles}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
