import express from "express";

// Importar todas as rotas
import booksRouter from "./books.routes.js";
import genresRouter from "./genres.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/books", booksRouter);
router.use("/genres", genresRouter);

// Rotas protegidas

export default router;