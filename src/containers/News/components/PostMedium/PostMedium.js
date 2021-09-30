import React from 'react';
import { Link } from 'react-router-dom';
import './PostMedium.scss';


export default function PostMedium(props) {
    const { post } = props;
    return (
        <div className="post-medium">
            <div className="post-medium__thumbnails">
                <img src={post?.image} alt="__thumbnails" />
            </div>
            <div className="post-medium__content" >
                <div className="post-medium__content__category mb-2">
                    {post.tags.map((item, index) => (
                        <a key={item + index} href="#0">{item}</a>
                    ))}
                </div>
                <Link to={`/news/${post?.id}`}>
                    <h2 className="line-clamp-3">
                        {post.title}
                    </h2>
                </Link>
                <div className="new-large__content__info flex flex-wrap justify-between items-center mt-2">
                    <span className="font-medium text-sm">{post.author.name}</span>
                    <p className="text-xs text-right">{new Date(post.publishedDate).toDateString()}</p>
                </div>
            </div>

        </div>
    )
}
