import React from 'react'

const MovieClassify = ({ classify, styles = '' }) => {
    const renderClassify = (classify) => {
        switch (classify) {
            case 'C18':
                return (
                    <span className={`inline-block w-8 p-1 bg-red-500 rounded-md text-sm text-white text-center ${styles}`}>C18</span>
                )
            case 'C13':
                return (
                    <span className={`inline-block w-8 p-1 bg-yellow-500 rounded-md text-sm text-white text-center ${styles}`}>C13</span>
                )
            default:
                return (
                    <span className={`inline-block w-8 p-1 bg-green-500 rounded-md text-sm text-white text-center ${styles}`}>P</span>
                )
        }

    }

    return (
        <>
            {renderClassify(classify)}
        </>
    )
}

export default MovieClassify
