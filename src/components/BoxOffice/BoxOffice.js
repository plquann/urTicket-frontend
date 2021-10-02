import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BoxOffice.scss';

export default function BoxOffice() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://imdb-api.com/en/API/BoxOffice/k_bs0grl31');
                setData(result.data.items);
            } catch (e) {
                console.log("🚀 ~ error", e);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="box-office max-w-screen-lg mx-auto pb-8 ">
            <div className="grid grid-cols-2 gap-4">
                <div className="box-office__table">
                    <h5 className="box-office__table__title">Box Office <span>(last week)</span></h5>
                    <hr />
                    <ul className="box-office__table__chart">
                        {data.map((movie, index) => (
                            <li key={movie.id + index}>
                                <i>{movie.rank}</i>
                                <a href="http://www.imdb.com/title/tt1398426/?ref_=fn_al_tt_1" >
                                    {movie.title}
                                    <span>{movie.weekend.replace('M', '00.000')}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="box-office__table">
                    <h5 className="box-office__table__title">Box Office US <span>(last week)</span></h5>
                    <hr />
                    <ul className="box-office__table__chart">
                        {data.map((movie, index) => (
                            <li key={movie.id + index}>
                                <i>{movie.rank}</i>
                                <a href="http://www.imdb.com/title/tt1398426/?ref_=fn_al_tt_1" >
                                    {movie.title}
                                    <span>{movie.weekend.replace('M', '00.000')}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>


    )
}

