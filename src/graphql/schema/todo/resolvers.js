export default {
  Query: {
    getTodos(parent, args, { TodoController }) {
      return TodoController.getTodos();
    },
    getTodo(parent, { id }, { TodoController }) {
      return TodoController.getTodo(id);
    },
  },
  Mutation: {
    createTodo(parent, { text }, { TodoController }) {
      return TodoController.createTodo(text);
    },
  },
};
