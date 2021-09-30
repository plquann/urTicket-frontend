import React, { useEffect, useState } from 'react';
import { newsAPI } from 'apis';
import './NewsDetails.scss'
import Page from 'components/Page/Page';
import { useForm } from 'react-hook-form';
import { news, categoryNews } from 'containers/News/_mocks_/newsData';
import faker from 'faker';
import Comment from 'containers/News/components/Comment/Comment';
import NewTrailer from 'containers/News/components/NewsTrailers/NewsTrailer';
import NewMostView from 'containers/News/components/PostMostView/PostMostView';
import { useParams } from 'react-router';
import dateFormat from 'dateformat';
import Loading from 'components/Loading/Loading';


export default function NewsDetails() {
    const [article, setArticle] = useState({});
    const { register, handleSubmit } = useForm();
    const { idArticle } = useParams();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const res = await newsAPI.getNewsDetails(idArticle);
                console.log('🚀 ~ file: index.js ~ line 26 ~ res', res);
                setArticle(res);
            } catch (err) {
                console.log('🚀 ~ file: index.js ~ line 28 ~ err', err);
            }
        };
        fetchArticleDetails();
    }, [idArticle]);

    return (
        <Page title="News Details | UR-TICKET">
            {article.id
                ? <div className="news-details max-w-screen-lg mx-auto mt-20">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="news-details__article col-span-2">
                            <div className="news-details__article__category mb-2">
                                {article?.tags.map((item, index) => (
                                    <a key={item + index} href="#0">{item}</a>
                                ))}
                            </div>
                            <h1 className="news-details__article__title">{article?.title}</h1>
                            <div className="news-details__article__info">
                                <a href="0" className="author">{article?.author.name}</a>
                                <span className="space">|</span>
                                <span>PUBLISHED: {dateFormat(article?.publishedDate, 'fullDate')}</span>
                            </div>
                            <div className="news-details__article__thumbnails">
                                <img
                                    src={article?.image}
                                    alt="article thumbnails"
                                    style={{ width: '900px', height: '400px', objectFit: 'cover' , objectPosition: '0% 10%'}}
                                />
                            </div>
                            <div className="news-details__article__content">
                                {article?.paragraphs.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                            <div className="news-details__article__footer">
                                <p className="news-details__article__footer__title">MORE FROM THIS AUTHOR</p>
                                <div className="news-details__article__footer__wrapper ">
                                    <img src="https://img.cinemablend.com/filter:centercrop/quill/e/e/7/1/7/8/ee71780e7ccb96ba01ba8653abb94d4b876625fd.png?w=100&h=100" alt="author" />
                                    <div className="info">
                                        <p className="name">{article?.author.name}</p>
                                        <p className="text-gray-400 text-sm">{article?.author.introduction}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="news-details__article__discussion mt-6">
                                <h3>DISCUSSION</h3>
                                <Comment />
                                <Comment />
                                <Comment />
                                <div className="your-comment">
                                    <h4>Leave your comment</h4>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <textarea {...register("Comment", {})} rows="2" placeholder="Enter your comment..." />
                                        <input type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="news-details__related pl-4">
                                <NewMostView idArticle={idArticle}/>
                                <NewTrailer />
                                <div className="news-category mt-4">
                                    <h1 className="post-most-view__title">Categories News</h1>
                                    {categoryNews.map((item, index) => (
                                        <a key={item + index} href="#0">{item}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <Loading />
            }
        </Page>
    )
}
