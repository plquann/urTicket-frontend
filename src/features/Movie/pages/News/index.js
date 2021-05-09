import React from 'react'

export default function News() {
    return (
        <div className="news max-w-screen-xl mx-auto">

            <div className="grid grid-cols-4 grid-rows-2 gap-4 text-center">
                <div className="col-span-2 row-span-2 border">
                    Box 1
                </div>
                <div className="border">
                    Box 2
                </div>
                <div className="border">
                    Box 3
                </div>
                <div className="border">
                    Box 4
                </div>
                <div className="border">
                    Box 4
                </div>
            </div>
        </div>
    )
}
