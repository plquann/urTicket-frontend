import React from 'react'

export default function RelatedNews({ news }) {
    return (
        <div className="related-news mt-6">
            <h3 className="text-xl font-semibold my-2 uppercase mb-4">Related news</h3>
            <div className="grid grid-cols-2 gap-4">
                {news.map((item, index) => {
                    return (
                        <div key={item?.id} className="related--1 flex flex-wrap mb-4">
                            <div className="related--1__img w-1/3">
                                <img src={item?.image} alt="" style={{ width: '150px', height: '75px', objectFit: 'cover', objectPosition:'50% 10%' }} />
                            </div>
                            <div className="related--1__wrapper w-2/3 pr-4">
                                <h5 className="line-clamp-2 font-medium -mt-1" style={{ lineHeight: '22px' }}>
                                    {item?.title}
                                </h5>
                                <p className="text-xs text-gray-400 mt-3">{new Date(item?.publishedDate).toDateString()}<span className="font-medium ml-4"> by {item?.author.name}</span></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
