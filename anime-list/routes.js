import * as dao from "./dao.js";
let currentUser = null;

function animeRoutes(app) {
  const createAnime = async (req, res) => { };
  const deleteAnime = async (req, res) => { };
  const findAllAnime = async (req, res) => {
    const anime = await dao.findAllAnime();
    res.json(anime);
  };
  const findAnimeById = async (req, res) => {
    const id = req.params.uid;
    const anime = await dao.findAnimeById(id);
    res.json(anime);
  };
  const findByTitle = async (req, res) => {
    try {
      const title = req.params.title;

      if (!title || title.trim() === '') {
        return res.status(400).json({ message: "Search term is required" });
      }
      console.log("Search Term:", title); // Add this line for debugging
      const anime = await dao.findAnimeByTitle(title);
      console.log("Search Result:", anime); // Add this line for debugging

      res.json(anime);
    } catch (error) {
      console.error("Error:", error); // Log any errors for debugging
      res.status(500).send(error.message);
    }
  };

  const findBySearchTerm = async (req, res) => {
    try {
      const searchTerm = req.params.searchTerm;

      if (!searchTerm || searchTerm.trim() === '') {
        return res.status(400).json({ message: "Search term is required" });
      }

      const anime = await dao.findAnimeBySearchTerm(searchTerm);
      res.json(anime);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  const findAnimeByRank = async (req, res) => {
    const rank = req.params.raked;
    const anime = await dao.findAnimeById(rank);
    res.json(anime);
  };
  const uploadAnimeImage = async (req, res) => {
    const file = req.file;
    const anime = await dao.uploadAnimeImage(file);
    res.json(anime);
  };

  const updateAnime = async (req, res) => {
    const id = req.params.id;
    const newAnime = req.body;
    const status = await dao.updateAnime(id, newAnime);
    res.json(status);
  };

  app.post("/api/anime/upload", uploadAnimeImage);
  app.post("/api/anime", createAnime);
  app.get("/api/anime", findAllAnime);
  app.get("/api/anime/:uid", findAnimeById);
  app.get("/api/anime/title/:title", findByTitle);
  app.get("/api/anime/:ranked", findAnimeByRank);
  app.put("/api/anime/:id", updateAnime);
  app.get("/api/anime/search/:searchTerm", findBySearchTerm);
}
export default animeRoutes;
