import express from "express";

// Importar todas as rotas
import booksRouter from "./books.routes.js";

const router = express.Router();

// Rotas públicas
router.use("/books", booksRouter);

// Rotas protegidas

export default router;