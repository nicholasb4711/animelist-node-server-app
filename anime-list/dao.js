import model from "./model.js";

export const createAnime = (title) => model.create(title);
export const findAllAnime = () => model.find();
export const findAnimeById = (animeId) => model.findOne({ uid: animeId });
export const findAnimeByTitle = async (term) => {
  return model.find({ title: { $regex: new RegExp(term, 'i') } });
};

export const findAnimeBySearchTerm = async (searchTerm) => {
  console.log("Searching for:", searchTerm); // Add this line for debugging
  return model.find({ $text: { $search: searchTerm } });
};



export const findAnimeByGenre = (genre) =>
  model.find({ genre: genre });

//   export const updateUser = (userId, user) =>
//   model.updateOne({ _id: userId }, { $set: user });

export const deleteAnime = (animeId) => model.deleteOne({ uid: animeId });

export const updateAnime = (animeId, anime) =>
  model.updateOne({ _id: animeId }, { $set: anime });