import model from "./model.js";

export const createAnime = (title) => model.create(title);
export const findAllAnime = () => model.find();
export const findAnimeById = (animeId) => model.find({uid: animeId});
export const findAnimeByRank = (rank) => model.find({ranked: rank});
export const findAnimeByTitle = (title) =>
  model.findOne({ title: title });
  export const findAnimeByGenre = (genre) =>
  model.find({ genre: genre });

//   export const updateUser = (userId, user) =>
//   model.updateOne({ _id: userId }, { $set: user });

  export const deleteAnime = (animeId) => model.deleteOne({ uid: animeId });