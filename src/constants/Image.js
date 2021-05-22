import NotFoundBG from 'assets/images/404.png';
import Logo from 'assets/images/favicon.png';
import FooterLogo from 'assets/images/footer/footer-logo.png';
import NewslaterBG from 'assets/images/newslater/newslater-bg01.jpg';
import MovieIMG1 from 'assets/images/movie/movie1.jpg';
import MovieIMG2 from 'assets/images/movie/movie2.jpg';
import MovieIMG3 from 'assets/images/movie/movie3.jpg';
import MovieIMG4 from 'assets/images/movie/movie4.jpg';
import MovieIMG5 from 'assets/images/movie/movie5.jpg';
import MovieIMG6 from 'assets/images/movie/movie6.jpg';
import MovieIMG7 from 'assets/images/movie/movie7.jpg';
import MovieIMG8 from 'assets/images/movie/movie8.jpg';
import MovieIMG9 from 'assets/images/movie/movie9.jpg';
import MovieIMG10 from 'assets/images/movie/movie10.jpg';
import MovieIMG11 from 'assets/images/movie/movie11.jpg';
import MovieIMG12 from 'assets/images/movie/movie12.jpg';

import MovieDetail1 from 'assets/images/movie/movie-details01.jpg';
import MovieDetail2 from 'assets/images/movie/movie-details02.jpg';
import MovieDetail3 from 'assets/images/movie/movie-details03.jpg';
import MovieDetail4 from 'assets/images/movie/movie-details04.jpg';
import MovieDetail5 from 'assets/images/movie/movie-details05.jpg';
import MovieDetail6 from 'assets/images/movie/movie-details06.jpg';

import Tomato from 'assets/images/movie/tomato.png';
import Cake from 'assets/images/movie/cake.png';
import TomatoLG from 'assets/images/movie/tomato2.png';
import CakeLG from 'assets/images/movie/cake2.png';
import Heart from 'assets/images/icons/heart.png';
import Book from 'assets/images/icons/book.png';
import playBTN from 'assets/images/icons/play-button.png';
import searchthums from 'assets/images/ticket/cinema.png';
import searchBackground from 'assets/images/ticket/ticket-bg01.jpg';

import prevArrow from 'assets/images/arrow/back-session.png';
import nextArrow from 'assets/images/arrow/next-session.png';
import rightArrow from 'assets/images/arrow/right-arrow.png';
import leftArrow from 'assets/images/arrow/left-arrow.png';

import bannerMovie1 from 'assets/images/banner/banner03.jpg';
import bannerMovie2 from 'assets/images/banner/bannerkong.jpg';

import cast1 from 'assets/images/cast/cast01.jpg';
import cast2 from 'assets/images/cast/cast02.jpg';
import cast3 from 'assets/images/cast/cast03.jpg';
import cast4 from 'assets/images/cast/cast04.jpg';
import cast5 from 'assets/images/cast/cast05.jpg';
import cast6 from 'assets/images/cast/cast06.jpg';
import cast7 from 'assets/images/cast/cast07.jpg';
import cast8 from 'assets/images/cast/cast08.jpg';
import explore from 'assets/images/poster_explore.jpg';

import Screen from 'assets/images/movie/screen-thumb.png';
import seat1 from 'assets/images/movie/seat01.png';
import seat2 from 'assets/images/movie/seat02.png';
// import seat_book from 'assets/images/movie/seat';


import card from 'assets/images/payment/card.png';
import paypal from 'assets/images/payment/paypal.png';

import account_bg from 'assets/images/account/account-bg.jpg';

export const PAYMENT = {
    CARD: card,
    PAYPAL: paypal,
};

export const SEAT = {
    SEAT: seat1,
    SEAT_COUPLE: seat2,
}

export const ACCOUNT_BG = account_bg;
export const SEARCH_BG = searchBackground;
export const MOVIE_EXPLORE = explore;
export const SCREEN = Screen;
export const IMAGE_BG = {
    NOTFOUND_BG: NotFoundBG,
    NEWSLETTER_BG: NewslaterBG,

};

export const BANNER_BG = {
    BANNER_1: bannerMovie1,
    BANNER_2: bannerMovie2,

};

export const ARROW_CAROUSEL = {
    PREV_ARROW: prevArrow,
    NEXT_ARROW: nextArrow,
    RIGHT_ARROW: rightArrow,
    LEFT_ARROW: leftArrow,
};

export const ICONS = {
    TOMATO: Tomato,
    CAKE: Cake,
    TOMATO_LG: TomatoLG,
    CAKE_LG: CakeLG,
    BOOK: Book,
    HEART: Heart,
    PLAY_BTN: playBTN,
};

export const THUMS = searchthums;

export const MOVIE_IMG = [
    MovieIMG1,
    MovieIMG2,
    MovieIMG3,
    MovieIMG4,
    MovieIMG5,
    MovieIMG6,
    MovieIMG7,
    MovieIMG8,
    MovieIMG9,
    MovieIMG10,
    MovieIMG11,
    MovieIMG12,
];

export const MOVIE_PHOTO = [
    MovieDetail1,
    MovieDetail2,
    MovieDetail3,
    MovieDetail4,
    MovieDetail5,
    MovieDetail6,
];
export const CAST_PHOTO = [
    cast1,
    cast2,
    cast3,
    cast4,
    cast5,
    cast6,
    cast7,
    cast8,
];

export const LOGO = {
    APP_LOGO: Logo,
    FOOTER_LOGO: FooterLogo,
};

const domain = 'https://tix.vn/app/assets/img/icons/';
export const LOGO_PARTNER = [
    { link: '#', name: 'BHD_STAR', img: `${domain}bhd.png` },
    { link: '#', name: 'GALAXY', img: `${domain}galaxycine.png` },
    { link: '#', name: 'CINE_STAR', img: `${domain}cinestar.png` },
    { link: '#', name: 'LOTTE', img: `http://www.lottecinemavn.com/LCCS/Image/Thum/lotte_cinema_logo.jpg` },
    { link: '#', name: 'MEGAGS', img: `${domain}megags.png` },
    { link: '#', name: 'BETA_CINE', img: `${domain}bt.jpg` },
    { link: '#', name: 'TOACH_CINE', img: `${domain}TOUCH.png` },
    { link: '#', name: 'CINEMAX', img: `${domain}cnx.jpg` },
    { link: '#', name: 'START_LIGHT', img: `${domain}STARLIGHT.png` },
    { link: '#', name: 'DDC', img: `${domain}dongdacinema.png` },
    { link: '#', name: 'DCINE', img: `${domain}dcine.png` },
    { link: '#', name: 'MOMO', img: `${domain}momo.png`, description: 'Transact first time with MoMo and get ticket with $1 within and cashback up to 50% for next time.' },
    { link: '#', name: 'PAYOO', img: `${domain}payoo.jpg` },
    { link: '#', name: 'ZALOPAY', img: `${domain}zalopay_icon.png` },
    { link: '#', name: 'VCBANK', img: `${domain}VCB.png` },
    { link: '#', name: 'AGRIBANK', img: `${domain}AGRIBANK.png` },
    { link: '#', name: 'IVBANK', img: `${domain}IVB.png` },
    { link: '#', name: 'VTBANK', img: `${domain}VIETTINBANK.png` },
    { link: '#', name: 'GO', img: `${domain}123go.png` },
    { link: '#', name: 'LABAN', img: `${domain}laban.png` },
    // { link: '#', name: 'CGV', img: `https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png` }
];

export const SVG_IMAGES = {
    SVG_GGPLAY: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/google-play-badge.svg',
    SVG_APPSTORE: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/download-on-the-app-store-apple-2.svg',
};

