import React from 'react'

export default function RelatedNews() {
    return (
        <div className="related-news mt-6">
            <h3 className="text-xl font-semibold my-2 uppercase mb-4">Related news</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="related--1 flex flex-wrap mb-4">
                    <div className="related--1__img w-1/3">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/7/3/e/0/4/4/73e044c40cbd118501a9f046825b8ba4bb02a418.jpg?w=150&h=75" alt="" />
                    </div>
                    <div className="related--1__wrapper w-2/3 pr-4">
                        <h5 className="line-clamp-2 font-medium -mt-1" style={{ lineHeight: '22px' }}>
                            The Suicide Squad's Idris Elba And Chris Hemsworth’s Extraction Director Are Teaming Up For A New Film,
                            And It Sounds Wild
                        </h5>
                        <p className="text-xs text-gray-400 mt-3"> May 8 2021 09:15 PM  <span className="font-medium ml-4"> by Christian David</span></p>
                    </div>
                </div>
                <div className="related--2 flex flex-wrap mb-4">
                    <div className="related--2__img w-1/3">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/3/7/1/9/e/7/3719e706c634415a0f496016eebf60c7f96eb831.jpg?w=150&h=75" alt="" />
                    </div>
                    <div className="related--2__wrapper w-2/3  pr-4 ">
                        <h5 className="line-clamp-2 font-medium" style={{ lineHeight: '22px' }}>

                            Marvel’s Sharon Carter Reveals Complicated Kiss Feelings When Filming Captain America: Civil War
                        </h5>
                        <p className="text-xs text-gray-400 mt-3"> May 7 2021 01:15 PM  <span className="font-medium ml-4"> by Jennifer Lopes</span></p>
                    </div>
                </div>
                <div className="related--3 flex flex-wrap mb-4 -mt-4">
                    <div className="related--3__img w-1/3">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/b/8/5/a/7/b/b85a7ba1c4c5f3acc9a7d1137c70a80f39cf962a.jpg?w=150&h=75" alt="" />
                    </div>
                    <div className="related--3__wrapper w-2/3  pr-4 " style={{ lineHeight: '22px' }}>
                        <h5 className="line-clamp-2 font-medium">
                            Hunger Games Fans Are Celebrating Jennifer Lawrence's Katniss Everdeen, So Can We Have A Sequel Already?
                        </h5>
                        <p className="text-xs text-gray-400 mt-3"> May 8 2021 18:15 PM  <span className="font-medium ml-4"> by Taylor Lawrence</span></p>
                    </div>
                </div>
                <div className="related--4 flex flex-wrap mb-4 -mt-4">
                    <div className="related--3__img w-1/3">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/b/8/5/a/7/b/b85a7ba1c4c5f3acc9a7d1137c70a80f39cf962a.jpg?w=150&h=75" alt="" />
                    </div>
                    <div className="related--3__wrapper w-2/3  pr-4 " style={{ lineHeight: '22px' }}>
                        <h5 className="line-clamp-2 font-medium">
                            Hunger Games Fans Are Celebrating Jennifer Lawrence's Katniss Everdeen, So Can We Have A Sequel Already?
                        </h5>
                        <p className="text-xs text-gray-400 mt-3"> May 8 2021 18:15 PM  <span className="font-medium ml-4"> by Taylor Lawrence</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
