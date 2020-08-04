import { Schema, model } from "mongoose"

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
  rate: Number,
  watched: Boolean,
});

export default model('Movie', movieSchema);
