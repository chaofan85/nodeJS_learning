const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// const newTodo = new Todo({
//   text: 'Cook dinner'
// });

// const newTodo = new Todo({
//   text: 'Get haircut',
//   completed: false,
//   completedAt: 20180218
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo.');
// });

const User = mongoose.model('User ', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

const user = new User({
  email: "chao@gmail.com    "
});

user.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user.', e);
});
