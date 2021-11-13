//mport { getRandomUser, getRandomUsers } from "../../factories/userFactory";
import actionTypes from "../actions/actionTypes";
import userListReducer from "./userListReducer";

describe("Given a userListReducer reducer", () => {
  describe("When it receives an empty user list and an unknown action", () => {
    test("Then it should return the same empty user list", () => {
      const initialUserList = [];

      const action = {};

      const newList = userListReducer(initialUserList, action);

      expect(newList).toEqual(initialUserList);
    });
  });

  describe("When it receives a user and a createUser action", () => {
    test("Then it should return newUserList including the new user", () => {
      const userList = [
        {
          id: "cosas9907id",
          name: "Elsaaa",
          username: "Elsathecrocs",
          password: "gimmefoodbi",
          photo: "image.imageUrl()",
          enemies: [],
          friends: [],
          bio: "cosas de perro",
        },
        {
          id: "cosas9920id",
          name: "Elsa",
          username: "Elsathecroc",
          password: "gimmefoodbi",
          photo: "image.imageUrl()",
          enemies: [],
          friends: [],
          bio: "cosas de perro",
        },
        {
          id: "cosas9928id",
          name: "Elsas",
          username: "Elsathecrocp",
          password: "gimmefoodbi",
          photo: "image.imageUrl()",
          enemies: [],
          friends: [],
          bio: "cosas de perro",
        },
      ];
      const newUser = {
        id: "cosas9820id",
        name: "Elsat",
        username: "Elsathecroct",
        password: "gimmefoodbi",
        photo: "image.imageUrl()",
        enemies: [],
        friends: [],
        bio: "cosas de perro",
      };

      const action = {
        type: actionTypes.createUser,
        user: newUser,
      };
      const newUserList = userListReducer(userList, action);

      expect(newUserList).toContain(newUser);
    });
  });
});
