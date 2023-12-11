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
    const id = req.params.aniId;
    const anime = await dao.findAnimeById(id);
    res.json(anime);
  };
  const findAnimeByTitle = async (req, res) => {
    const title = req.params.title;
    const anime = await dao.findAnimeByTitle(title);
    res.json(anime);
  }
  const findAnimeByRank = async (req, res) => {
    const rank = req.params.raked;
    const anime = await dao.findAnimeById(rank);
    res.json(anime);
  };
  app.post("/api/anime", createAnime);
  app.get("/api/anime", findAllAnime);
  app.get("/api/anime/:aniId", findAnimeById);
  app.get("/api/anime/:title", findAnimeByTitle);
  app.get("/api/anime/:ranked", findAnimeByRank);
}
export default animeRoutes;
