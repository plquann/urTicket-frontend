import React from 'react';
import Slider from 'react-slick';
import './MovieItemCarousel.scss';
import { ARROW_CAROUSEL } from 'constants/image';
import ArrowCarousel from 'components/ArrowCarousel/ArrowCarousel';
import MovieCard from '../MovieCard/MovieCard';

const settings = {
    dots: false,
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
    infinite: false,
    className: "slides",
    slidesToShow: 2,
    rows: 2,
    slidesPerRow: 2,
    // slidesToScroll: 4,
    nextArrow: <ArrowCarousel isCustom={'next__movie'} arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
    prevArrow: <ArrowCarousel isCustom={'prev__movie'} arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
}

const movies = [
    {
      title: 'The Suicide Squad',
      trailerVideoUrl: 'eg5ciqQzmK0',
      posterUrl:
        'https://image.tmdb.org/t/p/original/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
      description:
        'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
      releaseDate: '2021-07-28',
      duration: 115,
      language: 'en',
      voteAverage: 8.1,
      voteCount: 2497,
    },
    {
      title: 'Jungle Cruise',
      trailerVideoUrl: 'f_HvoipFcA8',
      posterUrl:
        'https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
      description:
        'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.',
      releaseDate: '2021-07-28',
      duration: 136,
      language: 'en',
      voteAverage: 7.9,
      voteCount: 1840,
    },
    {
      title: 'Free Guy',
      trailerVideoUrl: 'X2m-08cOAbc',
      posterUrl:
        'https://image.tmdb.org/t/p/original/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg',
      description:
        'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
      releaseDate: '2021-08-11',
      duration: 116,
      language: 'en',
      voteAverage: 7.9,
      voteCount: 206,
    },
    {
      title: 'Black Widow',
      trailerVideoUrl: 'Fp9pNPdNwjI',
      posterUrl:
        'https://image.tmdb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
      description:
        'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
      releaseDate: '2021-07-07',
      duration: 116,
      language: 'en',
      voteAverage: 7.8,
      voteCount: 4299,
    },
    {
      title: 'Space Jam: A New Legacy',
      trailerVideoUrl: 'olXYZOsXw_o',
      posterUrl:
        'https://image.tmdb.org/t/p/original/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg',
      description:
        "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
      releaseDate: '2021-07-08',
      duration: 107,
      language: 'en',
      voteAverage: 7.5,
      voteCount: 1792,
    },
    {
      title: 'F9',
      trailerVideoUrl: 'aSiDu3Ywi8E',
      posterUrl:
        'https://image.tmdb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg',
      description:
        "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
      releaseDate: '2021-05-19',
      duration: 112,
      language: 'en',
      voteAverage: 7.6,
      voteCount: 2847,
    },
    {
      title: 'The Boss Baby: Family Business',
      trailerVideoUrl: 'QPzy8Ckza08',
      posterUrl:
        'https://image.tmdb.org/t/p/original/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
      description:
        'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
      releaseDate: '2021-07-01',
      duration: 104,
      language: 'en',
      voteAverage: 7.8,
      voteCount: 1191,
    },
    {
      title: 'Luca',
      trailerVideoUrl: 'mYfJxlgR2jw',
      posterUrl:
        'https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
      description:
        'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
      releaseDate: '2021-06-17',
      duration: 112,
      language: 'en',
      voteAverage: 8.1,
      voteCount: 3949,
    },
    {
      title: 'Vivo',
      trailerVideoUrl: 'BOe8L69JpVI',
      posterUrl:
        'https://image.tmdb.org/t/p/original/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/2BftdeCkD7uf68KUxaKRBxtsmZZ.jpg',
      description:
        'A music-loving kinkajou named Vivo embarks on the journey of a lifetime to fulfill his destiny and deliver a love song for an old friend.',
      releaseDate: '2021-07-30',
      duration: 147,
      language: 'en',
      voteAverage: 7.7,
      voteCount: 203,
    },
    {
      title: 'Jolt',
      trailerVideoUrl: '3BSSoD73TSk',
      posterUrl:
        'https://image.tmdb.org/t/p/original/gYZAHan5CHPFXORpQMvOjCTug4E.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/wPjtacig0kIkVcTQmXoNt6jbMwo.jpg',
      description:
        'Lindy is an acid-tongued woman with rage issues who controls her temper by shocking herself with an electrode vest. One day she makes a connection with Justin, who gives her a glimmer of hope for a shock-free future, but when he’s murdered she launches herself on a revenge-fueled rampage in pursuit of his killer.',
      releaseDate: '2021-07-15',
      duration: 107,
      language: 'en',
      voteAverage: 6.8,
      voteCount: 516,
    },
    {
      title: "Don't Breathe 2",
      trailerVideoUrl: 'gRbG2tjHYCA',
      posterUrl:
        'https://image.tmdb.org/t/p/original/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/hB8ypGAAq1YiyyTdCSQeFoXHPXW.jpg',
      description:
        'The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.',
      releaseDate: '2021-08-12',
      duration: 107,
      language: 'en',
      voteAverage: 7.6,
      voteCount: 37,
    },
    {
      title: 'The Forever Purge',
      trailerVideoUrl: 'xOrXpK-rUaI',
      posterUrl:
        'https://image.tmdb.org/t/p/original/lB068qa6bQ0QKYKyC2xnYGvYjl7.jpg',
      backdropUrl:
        'https://image.tmdb.org/t/p/original/tehpKMsls621GT9WUQie2Ft6LmP.jpg',
      description:
        'All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.',
      releaseDate: '2021-06-30',
      duration: 118,
      language: 'en',
      voteAverage: 7.6,
      voteCount: 991,
    },
]

export default function MovieItemCarousel(props) {
    // const { movies } = props;

    return (
        <section className="carousel max-w-full relative">
            <Slider {...settings}>
                {movies.slice(0, 16)?.map((movie, index) => {
                    return (
                        <div className="px-2 py-4" key={index} >
                            <MovieCard movie={movie} />
                        </div>
                    )
                })}
            </Slider>
        </section>

    )
}
