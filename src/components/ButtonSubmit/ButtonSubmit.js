import React from 'react';
import './ButtonSubmit.scss';

export default function ButtonSubmit(props) {
    const { name } = props;
    return (
        <div className="submit">
            <button type="submit" className="btn-submit" >{name}</button>
        </div>
    )
}
