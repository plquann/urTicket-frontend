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
import bannerMovie1 from 'assets/images/banner/banner03.jpg';
import bannerMovie2 from 'assets/images/banner/bannerkong.jpg';


export const SEARCH_BG = searchBackground;

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
    { link: '#', name: 'MOMO', img: `${domain}momo.png` },
    { link: '#', name: 'PAYOO', img: `${domain}payoo.jpg` },
    { link: '#', name: 'ZALOPAY', img: `${domain}zalopay_icon.png` },
    { link: '#', name: 'VCBANK', img: `${domain}VCB.png` },
    { link: '#', name: 'AGRIBANK', img: `${domain}AGRIBANK.png` },
    { link: '#', name: 'IVBANK', img: `${domain}IVB.png` },
    { link: '#', name: 'VTBANK', img: `${domain}VIETTINBANK.png` },
    { link: '#', name: 'GO', img: `${domain}123go.png` },
    { link: '#', name: 'LABAN', img: `${domain}laban.png` },
];

export const SVG_IMAGES = {
    SVG_GGPLAY: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/google-play-badge.svg',
    SVG_APPSTORE: 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/download-on-the-app-store-apple-2.svg',
};

