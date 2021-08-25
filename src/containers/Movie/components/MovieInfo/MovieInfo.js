import React from 'react';

export default function MovieInfo() {
    return (
        <>
            <div className="info">
                <h3 className="title text-4xl mb-2 font-bold ">VENUS</h3>
                <div className="tags text-lg mb-4">
                    <span style={{ color: '#9aace5', fontSize: '14px' }}>C18 - NO CHILDREN UNDER 18 YEARS OLD</span>
                </div>

                <div className="genres mb-3.5">
                    {[1,2].map((genre, index) => {
                        return(
                        <a  key={index}
                            href="#0"
                            className="inline-block border border-solid text-xs uppercase px-3.5 py-2 rounded-3xl transition-all duration-300 ease-in-out mr-4"
                            style={{ color: '#9aace5', borderColor: 'rgba(168,177,198,0.2)' }}
                        >
                            {genre}
                        </a>)
                    })}
                </div>
            </div>
            <div className="social__duration flex flex-wrap">
                <div className="duration-area flex flex-wrap space-x-2">
                    <div className="item mr-2 " style={{ color: '#9aace5' }}>
                        <i className="fas fa-calendar-alt mr-1.5" /><span>06 Dec, 2020</span>
                    </div>
                    <div className="item" style={{ color: '#9aace5' }}>
                        <i className="far fa-clock mr-1.5" /><span>2 hrs 50 mins</span>
                    </div>
                </div>
                <ul className="social-share flex flex-wrap ml-auto">
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-facebook-f" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-twitter" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-pinterest-p" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-linkedin-in" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-google-plus-g" /></a></li>
                </ul>
            </div>
        </>
    )
}
