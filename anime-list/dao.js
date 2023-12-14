import model from "./model.js";

export const createAnime = (title) => model.create(title);
export const findAllAnime = () => model.find();
export const findAnimeById = (animeId) => model.findOne({uid: animeId});
export const findAnimeByTitle = (title) =>
  model.find({ title: title });
  export const findAnimeByGenre = (genre) =>
  model.find({ genre: genre });

//   export const updateUser = (userId, user) =>
//   model.updateOne({ _id: userId }, { $set: user });

  export const deleteAnime = (animeId) => model.deleteOne({ uid: animeId });

  export const updateAnime = (animeId, anime) =>
  model.updateOne({ _id: animeId }, { $set: anime });