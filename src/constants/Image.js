import NotFoundBG from 'assets/images/404.png';
import Logo from 'assets/images/favicon.png';


import Tomato from 'assets/images/movie/tomato.png';
import Cake from 'assets/images/movie/cake.png';
import TomatoLG from 'assets/images/movie/tomato2.png';
import CakeLG from 'assets/images/movie/cake2.png';
import Heart from 'assets/images/icons/heart.png';
import Book from 'assets/images/icons/book.png';
import playBTN from 'assets/images/icons/play-button.png';

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
import seatSingleBooked from 'assets/images/movie/seat01-booked.png';
import seatSingleBooking from 'assets/images/movie/seat01-booking.png';
import seatCoupleBooked from 'assets/images/movie/seat02-booked.png';
import seatCoupleBooking from 'assets/images/movie/seat02-booking.png';

import card from 'assets/images/payment/card.png';
import paypal from 'assets/images/payment/paypal.png';

import account_bg from 'assets/images/account/account-bg.jpg';
import cinema from 'assets/images/movie/cinema.png';

import profileCover from 'assets/images/backapp.jpg';

export const PROFILE_COVER = profileCover;

export const PAYMENT = {
    CARD: card,
    PAYPAL: paypal,
};

export const SEAT = {
    SEAT_AVAILABLE: seat1,
    SEAT_RESERVED: seatSingleBooked,
    SEAT_SELECTED: seatSingleBooking,
    SEAT_COUPLE_AVAILABLE: seat2,
    SEAT_COUPLE_RESERVED: seatCoupleBooked,
    SEAT_COUPLE_SELECTED: seatCoupleBooking,
}

export const ACCOUNT_BG = account_bg;
export const MOVIE_EXPLORE = explore;
export const SCREEN = Screen;
export const IMAGE_BG = {
    NOTFOUND_BG: NotFoundBG,
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
    CINEMA_LOGO: cinema,
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
    { link: '#', name: 'CGV', img: `https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png` }

];

