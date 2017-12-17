import { RootController, permissions, rules } from 'boman';
import _ from 'lodash';
import { narcoOnly } from '../rules';

@RootController
class TodoController {
  createTodo(text) {
    return this.models.Todo.create({ text });
  }
  getTodos() {
    return this.models.Todo.find({});
  }
  getTodo(id) {
    return this.models.Todo.findOne({ _id: id });
  }
}

export default TodoController;
