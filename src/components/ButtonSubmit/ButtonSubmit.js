import React from 'react';
import './ButtonSubmit.scss';

export default function ButtonSubmit(props) {
    const { name, onSubmitForm } = props;
    return (
        <div className="submit">
            <button type="submit" className="btn-submit" onClick={() => onSubmitForm()}>{name}</button>
        </div>
    )
}
