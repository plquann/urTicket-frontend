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
}