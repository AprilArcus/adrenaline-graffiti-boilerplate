import mongoose from 'mongoose';

export default new mongoose.Schema({
  name: {
    type: String
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ]
});
