import express from "express";

import genresController from "../controllers/genres.controller.js";

const genresRouter = express.Router();

// Rota para obter todos os livros
genresRouter.get("/", genresController.getAllGenres);
genresRouter.post("/", genresController.createGenre);

export default genresRouter;