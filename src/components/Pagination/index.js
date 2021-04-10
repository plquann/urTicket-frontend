import React from 'react';
import './Pagination.scss';

export default function Pagination() {
    return (
        <div className="pagination">
            <button className="pagination__btn"><i className="fas fa-angle-double-left text-sm" /><span className="ml-1">Prev</span></button>
            <button className="pagination__btn">1</button>
            <button className="pagination__btn">2</button>
            <button className="pagination__btn active">3</button>
            <button className="pagination__btn">4</button>
            <button className="pagination__btn">5</button>
            <button className="pagination__btn"><span className="mr-1">Next</span><i className="fas fa-angle-double-right text-sm" /></button>
        </div>

    )
}
