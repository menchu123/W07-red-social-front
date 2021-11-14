import { datatype, name } from "faker";
import { image } from "faker/locale/uk";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: name.firstName(),
  username: name.firstName(),
  password: datatype.string(9),
  photo: image.imageUrl(),
  enemies: [],
  friends: [],
  bio: datatype.string(10),
}));

export const getRandomUser = () => factory.build();
export const getRandomUsers = (count = 3) => factory.buildList(count);
