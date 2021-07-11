import React from 'react';

export default function IconFill(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 24 24"
            style={{
                fill: `${fillColor}`,
            }}
        >
            <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
        </svg>

    )
}
