import Medal from 'components/Medal'
import { randomGenres } from 'constants/genres'
import React from 'react';
import Comment from '../Comment';
import './TopNewLarge.scss';

export default function TopNewLarge() {
    return (
        <div className="top-new-large">
            <div className="thumbnails">
                <img className="w-full h-full" src="https://cdn.mos.cms.futurecdn.net/rNqRoby4d3rr9QCnigVq2B-1024-80.jpeg.webp" alt="" />
            </div>
            <div className="title">
                <h2 className="line-clamp-2">Scarlett Johansson joins criticism of Golden Globes body amid accusations of racism sexism</h2>
                <p className="subtitle line-clamp-3 text-gray-400">
                    Scarlett Johansson is one of the most recognizable actors in the world,
                    having been a fixture in film and television since she was a child.
                    Over time, she’s also become a voice within the industry, speaking out
                    on issues affecting both the entertainment landscape and society as a whole.
                    The Hollywood Foreign Press Association has been a particularly hot topic as of late,
                    as the organization has received backlash for a number of reasons.
                    Now, Johansson is lending her voice to the many who are calling for reform with the HFPA
                    by bluntly revealing why she's avoiding doing Golden Globes press for years
                </p>
                <p> May 9 2021 12:05 PM <span className="text-lg font-bold mx-2"> |</span>  <span className="font-medium"> by Christian David</span></p>
                <div className="category mt-4">
                    {randomGenres().map((genre, index) => {
                        return <a key={index} href="#0">{genre}</a>
                    })}
                </div>
            </div>
            <div className="ranking ">
                <Medal rank='1' />
            </div>
            <div className="comments">
                <h3 className="text-xl font-semibold my-2 uppercase mb-4">Related news</h3>
                <div className="related--1 flex flex-wrap mb-4">
                    <div className="related--1__img w-1/3">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/7/3/e/0/4/4/73e044c40cbd118501a9f046825b8ba4bb02a418.jpg?w=150&h=75" alt="" />
                    </div>
                    <div className="related--1__wrapper w-2/3 -ml-8 pr-4">
                        <h5 className="line-clamp-2 font-medium -mt-1" style={{lineHeight: '22px'}}>
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
                    <div className="related--2__wrapper w-2/3 -ml-8 pr-4 ">
                        <h5 className="line-clamp-2 font-medium" style={{lineHeight: '22px'}}>

                            Marvel’s Sharon Carter Reveals Complicated Kiss Feelings When Filming Captain America: Civil War
                        </h5>
                        <p className="text-xs text-gray-400 mt-3"> May 7 2021 01:15 PM  <span className="font-medium ml-4"> by Jennifer Lopes</span></p>
                    </div>
                </div>
                <div className="related--3 flex flex-wrap mb-4">
                    <div className="related--3__img w-1/3">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/b/8/5/a/7/b/b85a7ba1c4c5f3acc9a7d1137c70a80f39cf962a.jpg?w=150&h=75" alt="" />
                    </div>
                    <div className="related--3__wrapper w-2/3 -ml-8 pr-4 " style={{lineHeight: '22px'}}>
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
