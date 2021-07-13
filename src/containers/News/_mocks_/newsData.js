import faker from 'faker';
import { sample, sampleSize } from 'lodash';

const newsImageUrl = [
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/d/d/0/2/7/d/dd027d225273def494eba7e48bd96e0ae008a27f.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/7/c/8/2/c/c/7c82cc25c64eea3af42105dee2e85a96c0d7b0b0.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/3/d/9/a/7/3/3d9a73c922d790600748b59302f683cfd791a7b5.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/6/0/6/7/0/f/60670f185cb5ed39f81fe4e4f5e92275f780d6c9.png',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/1/a/7/7/5/1/1a7751f787effd75966e687a85a550f536fada93.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/a/8/2/f/a/4/a82fa4f0c4fb55e7887645fcc103b53df543bd29.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/f/1/c/5/f/0/f1c5f0d5c41f9662ed77a979da7d513b4642d658.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/a/a/1/a/c/a/aa1aca03f93fda8d9fa61d128426d05c0e547703.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/9/e/d/7/e/4/9ed7e4ff3c352f1774b6992d173e41f204e1f026.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/1/2/b/c/3/a/12bc3a14210b5529a315d5872e6eda57af8c878d.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/9/c/0/d/3/c/9c0d3c89d792ad8a5490b047091bce6fb8c684fa.png',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/5/c/5/a/3/0/5c5a30f61e5626a9e56ca1505180d5fe93bde97c.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/6/5/f/5/f/f/65f5ff339dc5fbe1de16353c81fd8a9561e8c8fe.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/0/7/5/7/3/1/07573144ffbf4b83698a0f140fff19e6273d3eee.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/8/5/6/7/f/c/8567fc845a33d8304ac8d2db605c6a3c484bbdd2.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/4/3/c/4/f/2/43c4f274ee6476e4d6a85e39104fc39236b86dfa.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/2/4/b/e/0/b/24be0b2ef65cf102a6bccdd6a01ae7f03de9196f.png',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/2/5/0/6/f/e/2506fe065dc3cdc8b2ab3ecbbd5148556495c0c0.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/c/a/e/0/2/d/cae02de498cb0fdf4b355a41a4b180a391d29f52.jpg',
    'https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=900,h=900//quill/1/9/3/c/9/b/193c9b9cc28f59317440d56e5118a43bc8ba07a0.jpg',
];
const newsTitle = [
    'Why Daniel Radcliffe’s Reaction To The Harry Potter Films Has Changed Over The Years',
    'A Quiet Place Part 2 Streaming: How To Watch The Emily Blunt Movie',
    'Following Black Adam, Pierce Brosnan Is Teaming With Pitch Perfects Adam DeVine For Netflix Comedy',
    'The 10 Best Yelena Belova Lines, Because Florence Pugh Was The Best Part Of Black Widow',
    'Six Great Mortal Kombat Characters We Still Have Not Seen In The Movies',
    'Tom Cruise Hits Wimbledon With Mission: Impossible 7 Co-Stars Sparking Romance Rumors Again',
    'Disney’s Little Mermaid Remake Has Wrapped Filming, Halle Bailey Celebrates With First Look',
    'Enter For A Chance To Win CinemaBlends Snake Eyes Ticket Giveaway',
    'Black Widow: What The Fans Are Saying About The Latest Marvel Movie',
    'Dwayne Johnson Shares Epic Black Adam Set Photo Offers Glimpse At His Suit',
    'Zendaya On Why Spider-Man: No Way Home Was A ‘Bittersweet’ Experience',
    'Chris Hemsworth Is Pumped About Getting Back To Things He Loves After 5 Months Of Filming Thor Love And Thunder',
    'All Four LEGO Movies, Ranked, Including Lego Batman',
    'Black Adam Star Reveals More DC Villains Will Be In Dwayne Johnson’s Movie',
    'Spider-Man: No Way Home’s Zendaya Talks Being ‘Close’ With Her Co-Stars Amidst Rumors She’s Dating Tom Holland',
    'Ludacris And Tyrese Gibson Thank The Fans After F9’s Milestone At The Box Office',
    'Amazing Spider-Man 2’s Paul Giamatti Responds To Seemingly Being Skipped For No Way Home Rumored Crossover',
    'See Black Panther 2’s Lupita Nyong’o Getting Back Into Superhero Shape As The Movie Starts Filming',
    'Why Joining The Avengers Was A Little Bit Nerve-Wracking For The Guardians Of The Galaxy, According To Karen Gillan',
    'Whoa, It Looks Like Black Panther 2 Is Still Going Through Script Changes As Production Begins',
]
export const news = [...Array(20)].map((_, index) => ({
    id: faker.datatype.uuid(),
    title: newsTitle[index],
    author: faker.name.findName(),
    description: faker.lorem.paragraph(),
    imageUrl: newsImageUrl[index],
    category: sampleSize([
        'news',
        'trending',
        'movies',
        'hot stuff',
        'next',
        'reviews',
        'box office'
    ], 3),
    status: sample(['lastesNews', 'mostView']),
    createdAt: ' May 9 2021 12:05 PM',
}));

export const newsTrailer = [
    { videoId: '5K66kfVce0k' },
    { videoId: '0WVDKZJkGlY' },
    { videoId: 'qSqVVswa420' },
    { videoId: 'rrwBnlYOp4g' },
    { videoId: 'UFXt5pdpNMQ' },
    { videoId: 'ii8Jr2rzXFQ' },
]