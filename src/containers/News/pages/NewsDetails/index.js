import React from 'react';
import './NewsDetails.scss'
import Page from 'components/Page/Page';
import { news } from 'containers/News/_mocks_/newsData';
import faker from 'faker';
import Comment from 'containers/News/components/Comment/Comment';

const article = news[0];
const contents = faker.lorem.paragraphs();

export default function NewsDetails() {
    return (
        <Page title="News Details | UR-TICKET">
            <div className="news-details max-w-screen-lg mx-auto mt-20">
                <div className="grid grid-cols-3 gap-6">
                    <div className="news-details__article col-span-2">
                        <div className="news-details__article__category mb-2">
                            {article.category.map((item, index) => (
                                <a key={item + index} href="#0">{item}</a>
                            ))}
                        </div>
                        <h1 className="news-details__article__title">{article.title}</h1>
                        <div className="news-details__article__info">
                            <a href="0" className="author">{article.author}</a>
                            <span className="space">|</span>
                            <span>PUBLISHED: {article.createdAt}</span>
                        </div>
                        <div className="news-details__article__thumbnails">
                            <img
                                src={article.imageUrl}
                                alt="article thumbnails"
                                style={{ width: '900px', height: '400px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="news-details__article__content">
                            <p>{contents}</p>
                            <p>{contents}</p>
                            <p>{contents}</p>
                        </div>
                        <div className="news-details__article__footer">
                            <p className="news-details__article__footer__title">MORE FROM THIS AUTHOR</p>
                            <div className="news-details__article__footer__wrapper ">
                                <img src="https://img.cinemablend.com/filter:centercrop/quill/e/e/7/1/7/8/ee71780e7ccb96ba01ba8653abb94d4b876625fd.png?w=100&h=100" alt="author" />
                                <div className="info">
                                    <p className="name">{article.author}</p>
                                    <p className="text-gray-400 text-sm">Connoisseur of Marvel, DC, Star Wars, John Wick, MonsterVerse and Doctor Who lore. He's aware he looks like Harry Potter and Clark Kent.</p>
                                </div>
                            </div>
                        </div>
                        <div className="news-details__article__discussion mt-6">
                            <h3>DISCUSSION</h3>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
