import faker from 'faker';
import { sample, sampleSize } from 'lodash';

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

const movies = [...Array(50)].map((_, index) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    description: faker.lorem.paragraph(),
    genre: sampleSize([
        'action',
        'adventure',
        'comedy',
        'drama',
        'fantasy',
        'historical',
        'horror',
        'mystery',
        'romance',
        'science fiction',
        'thriller',
        'political',
        'western'
    ], 2),
    rating: faker.datatype.number({
        min: 1,
        max: 5,
    }),
    trailerUrl: 'https://www.youtube.com/embed/THXPCF6UHh8',
    posterUrl: faker.random.arrayElement(moviePosterUrls),
    duration: faker.datatype.number({
        min: 60,
        max: 180,
    }),
    category: faker.random.word(),
    classify: faker.random.arrayElement(movieClasses),
    casts: [
        ...Array(
            faker.datatype.number({
                min: 1,
                max: 5,
            }),
        ),
    ].map(() => `${faker.name.firstName()} ${faker.name.lastName()}`),
    releaseDate: '30/10/1998',
    status: sample(['showing', 'coming', 'overtime']),
    language: faker.address.country()
}));

export default movies;