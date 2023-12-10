import * as dao from "./dao.js";
let currentUser = null;

function animeRoutes(app) {
  const createAnime = async (req, res) => { };
  const deleteAnime = async (req, res) => { };
  const findAllAnime = async (req, res) => {
    const anime = await dao.findAllAnime();
    res.json(anime);
  };
  
  const findUserById = async (req, res) => {
    const id = req.params.userId;
    const user = await dao.findUserById(id);
    res.json(user);
  };
  const findUserByUsername = async (req, res) => {
    const username = req.params.username;
    const user = await dao.findUserByUsername(username);
    res.json(user);
  }
  const updateUser = async (req, res) => { };
  const signup = async (req, res) => { };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
  };

  const signout = (req, res) => { };
  const account = async (req, res) => { };
  app.post("/api/anime", createAnime);
  app.get("/api/allanime", findAllAnime);
  app.get("/api/users/:userId", findUserById);
  app.get("/api/users/username/:username", findUserByUsername);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/anime/:animeId", deleteAnime);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default AnimeRoutes;