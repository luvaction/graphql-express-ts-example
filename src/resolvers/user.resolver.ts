import { User, users } from "../models/user";

export const userResolver = {
  getUsers: (): User[] => {
    return users;
  },
};
