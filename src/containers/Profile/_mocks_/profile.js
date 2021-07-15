import faker from 'faker';
import { sample, sampleSize } from 'lodash';

export const me = {
    id: faker.datatype.uuid(),
    userName: 'quankhs',
    fullName: 'pham luong quan',
    gender: 'female',
    email: 'quanphamluong@gmail.com',
    birthday: new Date('October 30, 1998'),
    avatarUrl: 'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=150,h=150//quill/3/f/4/c/0/9/3f4c0974fc2a111ab77427455d283b644534abdc.jpg',
    phoneNumber: faker.phone.phoneNumberFormat(10),
    address: '227 Nguyen Van Cu Street, Ward 4, District 5, HCM city'
};

export const movieFavorites = [
    {
        id: faker.datatype.uuid(),
        title: 'Black Widow',
        rating: 4.5,
        releaseDate: 'Jul 07, 2021',
        desc: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
        videoTrailer: 'Fp9pNPdNwjI',
    },
    {
        id: faker.datatype.uuid(),
        title: 'The Tomorrow War',
        rating: 4,
        releaseDate: 'Jun 30, 2021',
        desc: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
        videoTrailer: 'QPistcpGB8o',
    },
    {
        id: faker.datatype.uuid(),
        title: 'A Quiet Place Part II',
        rating: 3.5,
        releaseDate: 'May 21, 2021',
        desc: 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
        videoTrailer: 'BpdDN9d9Jio',
    },
    {
        id: faker.datatype.uuid(),
        title: 'Loki',
        rating: 4.5,
        releaseDate: 'Jun 09, 2021',
        desc: 'After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant”or help fix the timeline and stop a greater threat.',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg',
        videoTrailer: 'nW948Va-l10',
    },
    // {
    //     id: faker.datatype.uuid(),
    //     title: 'F9: The Fast Saga',
    //     rating: 2.5,
    //     releaseDate: 'Jun 25, 2021',
    //     desc: 'Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they’ve ever encountered: his forsaken brother.',
    //     img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg'
    // },
];

const moviePosterUrls = [
    'https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/captain-marvel-epic-61x91-5cm-movie-poster-31596-1-p.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg',
    'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
    'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg',
    'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg',
    'https://cdnb.artstation.com/p/assets/images/images/017/317/689/large/toan-juno-final.jpg?1555483923',
    'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130',
    'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
    'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg',
    'https://upload.wikimedia.org/wikipedia/vi/9/94/Pinocchio_%282019_movie%29_poster.jpeg',
    'https://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71zaL8t0qgL._AC_SL1406_.jpg',
];
const movieClasses = ['P', 'C13', 'C16', 'C18'];

export const reservations = [...Array(30)].map((_, index) => ({
    id: faker.datatype.uuid(),
    movie: faker.commerce.productName(),
    cinema: sample([
        'CGV Landmark 81',
        'Lotte Go Vap',
        'CGV Aeon Mall',
        'BHD Bitexco',
    ]),
    room: sample([1, 2, 3, 4, 5, 6, 7, 8]),
    posterUrl: faker.random.arrayElement(moviePosterUrls),
    classify: faker.random.arrayElement(movieClasses),
    seat: ['F7', 'F8'],
    date: 'July 01, 2021',
    status: sample(['expire', 'alive']),
    price:'$35.00'
}));
