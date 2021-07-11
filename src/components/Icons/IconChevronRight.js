import React from 'react'

export default function IconChevronRight(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height}
            viewBox="0 0 24 24"
            style={{ fill: `${fillColor}` }}
        >
            <path d="M10.061 19.061L17.121 12 10.061 4.939 7.939 7.061 12.879 12 7.939 16.939z" />
        </svg>
    )
}
