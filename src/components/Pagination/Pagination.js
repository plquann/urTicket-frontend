import React from 'react';
import './Pagination.scss';
import { rangePagination } from 'utils/pagination'

export default function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { page, limit, totalRows } = pagination;
    
    const totalPages = Math.ceil(totalRows / limit);
    const arrPage = rangePagination(page, totalPages);

    const handlePageChange = (newPage) => {
        if (onPageChange)
            onPageChange(newPage);
    };

    return (
        <div className="pagination mt-5">
            <button
                className="pagination__btn"
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            >
                <i className="fas fa-angle-double-left text-sm" />
                <span className="ml-1">Prev</span>
            </button>
            {/* <button className="pagination__btn">1</button>
            <button className="pagination__btn">2</button>
            <button className="pagination__btn active">3</button>
            <button className="pagination__btn">4</button>
            <button className="pagination__btn">5</button> */}
            {arrPage.length && arrPage.map((item, index) => {
                return (
                    item === '...'
                        ? <button className="pagination__btn" key={index}>{item}</button>
                        : <button
                            key={index}
                            className={`pagination__btn ${item === page ? 'active' : ''}`}
                            onClick={() => handlePageChange(item)}
                        >
                            {item}
                        </button>
                )

            })}
            <button
                className="pagination__btn"
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            >
                <span className="mr-1">Next</span>
                <i className="fas fa-angle-double-right text-sm" />
            </button>
        </div>

    )
}
