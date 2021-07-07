import React from 'react'
import './BoxOffice.scss'

export default function BoxOffice() {
    return (
        <div className="box-office max-w-screen-lg mx-auto pb-8 ">
            <div className="grid grid-cols-2 gap-4">
                <div className="box-office__table">
                    <h5 className="box-office__table__title">Box Office VietNam <span>(last week)</span></h5>
                    <hr />
                    <ul className="box-office__table__chart">
                        <li>
                            <i>1</i>
                            <a href="http://www.imdb.com/title/tt1398426/?ref_=fn_al_tt_1" >
                                Straight Outta Compton
                                <span>$26.760.000</span>
                            </a>
                        </li>
                        <li>
                            <i>2</i>
                            <a href="http://www.imdb.com/title/tt2381249/?ref_=fn_al_tt_1" >
                                Mission: Impossible - Rogue Nation
                                <span>$11.700.000</span>
                            </a>
                        </li>
                        <li>
                            <i>3</i>
                            <a href="http://www.imdb.com/title/tt2752772/?ref_=fn_al_tt_1" >
                                Sinister 2
                                <span>$10.633.000</span>
                            </a>
                        </li>
                        <li>
                            <i>4</i>
                            <a href="http://www.imdb.com/title/tt2679042/?ref_=fn_al_tt_1" >
                                Hitman: Agent 47
                                <span>$8.200.000</span>
                            </a>
                        </li>
                        <li>
                            <i>5</i>
                            <a href="http://www.imdb.com/title/tt1638355/?ref_=fn_al_tt_1" >
                                The Man from U.N.C.L.E.
                                <span>$7.420.000</span>
                            </a>
                        </li>
                        <li>
                            <i>6</i>
                            <a href="http://www.imdb.com/title/tt3316948/?ref_=fn_al_tt_1" >
                                American Ultra
                                <span>$5.500.000</span>
                            </a>
                        </li>
                        <li>
                            <i>7</i>
                            <a href="http://www.imdb.com/title/tt4178092/?ref_=fn_al_tt_1" >
                                The Gift
                                <span>$4.300.000</span>
                            </a>
                        </li>
                        <li>
                            <i>8</i>
                            <a href="http://www.imdb.com/title/tt0478970/?ref_=fn_al_tt_1" >
                                Ant-Man
                                <span>$4.088.000</span>
                            </a>
                        </li>
                        <li>
                            <i>9</i>
                            <a onClick="return false;">
                                The Gift
                                <span>$3.710.000</span>
                            </a>
                        </li>
                        <li>
                            <i>10</i>
                            <a onClick="return false;">
                                Ant-Man
                                <span>$3.650.000</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="box-office__table">
                    <h5 className="box-office__table__title">Box Office US <span>(last week)</span></h5>
                    <hr />
                    <ul className="box-office__table__chart">
                        <li>
                            <i>1</i>
                            <a href="http://www.imdb.com/title/tt1398426/?ref_=fn_al_tt_1" >
                                Straight Outta Compton
                                <span>$26.760.000</span>
                            </a>
                        </li>
                        <li>
                            <i>2</i>
                            <a href="http://www.imdb.com/title/tt2381249/?ref_=fn_al_tt_1" >
                                Mission: Impossible - Rogue Nation
                                <span>$11.700.000</span>
                            </a>
                        </li>
                        <li>
                            <i>3</i>
                            <a href="http://www.imdb.com/title/tt2752772/?ref_=fn_al_tt_1" >
                                Sinister 2
                                <span>$10.633.000</span>
                            </a>
                        </li>
                        <li>
                            <i>4</i>
                            <a href="http://www.imdb.com/title/tt2679042/?ref_=fn_al_tt_1" >
                                Hitman: Agent 47
                                <span>$8.200.000</span>
                            </a>
                        </li>
                        <li>
                            <i>5</i>
                            <a href="http://www.imdb.com/title/tt1638355/?ref_=fn_al_tt_1" >
                                The Man from U.N.C.L.E.
                                <span>$7.420.000</span>
                            </a>
                        </li>
                        <li>
                            <i>6</i>
                            <a href="http://www.imdb.com/title/tt3316948/?ref_=fn_al_tt_1" >
                                American Ultra
                                <span>$5.500.000</span>
                            </a>
                        </li>
                        <li>
                            <i>7</i>
                            <a href="http://www.imdb.com/title/tt4178092/?ref_=fn_al_tt_1" >
                                The Gift
                                <span>$4.300.000</span>
                            </a>
                        </li>
                        <li>
                            <i>8</i>
                            <a href="http://www.imdb.com/title/tt0478970/?ref_=fn_al_tt_1" >
                                Ant-Man
                                <span>$4.088.000</span>
                            </a>
                        </li>
                        <li>
                            <i>9</i>
                            <a onClick="return false;">
                                The Gift
                                <span>$3.710.000</span>
                            </a>
                        </li>
                        <li>
                            <i>10</i>
                            <a onClick="return false;">
                                Ant-Man
                                <span>$3.650.000</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>


    )
}

