import faker from 'faker';

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
        videoTrailer:'Fp9pNPdNwjI',
    },
    {
        id: faker.datatype.uuid(),
        title: 'The Tomorrow War',
        rating: 4,
        releaseDate: 'Jun 30, 2021',
        desc: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
        videoTrailer:'QPistcpGB8o',
    },
    {
        id: faker.datatype.uuid(),
        title: 'A Quiet Place Part II',
        rating: 3.5,
        releaseDate: 'May 21, 2021',
        desc: 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
        videoTrailer:'BpdDN9d9Jio',
    },
    {
        id: faker.datatype.uuid(),
        title: 'Loki',
        rating: 4.5,
        releaseDate: 'Jun 09, 2021',
        desc: 'After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant”or help fix the timeline and stop a greater threat.',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg',
        videoTrailer:'nW948Va-l10',
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