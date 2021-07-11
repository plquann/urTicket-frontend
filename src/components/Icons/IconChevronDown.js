import React from 'react'

export default function IconChevronDown(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height}
            viewBox="0 0 24 24"
            style={{ fill: `${fillColor}` }}
        >
            <path d="M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z" />
        </svg>
    )
}