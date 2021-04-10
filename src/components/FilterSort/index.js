import React from 'react'

export default function FilterSort() {
    return (
        <div className="filter-area">
            <div className="filter-main">
                <div className="left">
                    <div className="item">
                        <span className="show">Show :</span>
                        <select className="select-bar">
                            <option value={12}>12</option>
                            <option value={15}>15</option>
                            <option value={18}>18</option>
                            <option value={21}>21</option>
                            <option value={24}>24</option>
                            <option value={27}>27</option>
                            <option value={30}>30</option>
                        </select>
                    </div>
                    <div className="item">
                        <span className="show">Sort By :</span>
                        <select className="select-bar">
                            <option value="showing">now showing</option>
                            <option value="exclusive">exclusive</option>
                            <option value="trending">trending</option>
                            <option value="most-view">most view</option>
                        </select>
                    </div>
                </div>
                <ul className="grid-button tab-menu">
                    <li className="active">
                        <i className="fas fa-th" />
                    </li>
                    <li>
                        <i className="fas fa-bars" />
                    </li>
                </ul>
            </div>
        </div>

    )
}
