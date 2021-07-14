import React from 'react';
import './PostMedium.scss';


export default function PostMedium(props) {
    const { post } = props;
    return (
        <div className="post-medium">
            <div className="post-medium__thumbnails">
                <img src={post.imageUrl} alt="__thumbnails" />
            </div>
            <div className="post-medium__content" >
                <div className="post-medium__content__category mb-2">
                    {post.category.map((item, index) => (
                        <a key={item + index} href="#0">{item}</a>
                    ))}
                </div>
                <h2 className="line-clamp-3">
                    {post.title}
                </h2>
                <div className="new-large__content__info flex flex-wrap justify-between items-center mt-2">
                    <span className="font-medium text-sm">{post.author}</span>
                    <p className="text-xs text-right">{post.createdAt}</p>
                </div>
            </div>

        </div>
    )
}
