import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schema = new Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
});

const Joke = model('Joke', schema);

export default Joke;
