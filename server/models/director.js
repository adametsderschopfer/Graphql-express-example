import { Schema, model } from "mongoose"

const directorSchema = new Schema({
  name: String,
  age: Number,
});

export default model('Director', directorSchema);
