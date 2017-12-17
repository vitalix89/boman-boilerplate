export default {
  Query: {
    getUsers(parent, args, { UserController }) {
      return UserController.getUsers();
    },
  },
  Mutation: {
    createUser(parent, { email }, { UserController }) {
      return UserController.createUser(email);
    },
  },
};
