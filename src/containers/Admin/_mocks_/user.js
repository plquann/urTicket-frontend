import faker from 'faker';
import { sample } from 'lodash';

const users = [...Array(30)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: faker.image.avatar({
    width: 50,
    height: 50,
  }),
  name: faker.name.findName(),
  email: faker.internet.email(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample(['Admin', 'User'])
}));

export default users;
