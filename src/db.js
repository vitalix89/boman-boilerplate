import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/boman', {
  useMongoClient: true,
});

const todoSchema = mongoose.Schema({
  text: String,
});

const Todo = mongoose.model('Todo', todoSchema);

const userSchema = mongoose.Schema({
  email: String,
});

const User = mongoose.model('User', userSchema);

export default { Todo, User };
