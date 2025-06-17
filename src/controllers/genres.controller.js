import BooksModel from "../models/books.model.js";

class BooksController {
    async getAllBooks(req, res) {
        try {
            const books = await BooksModel.findAll();
            res.status(200).json(books);
        } catch (error) {
            console.error("Erro no controller de livros:", error);
            res.status(500).json({ error: "Erro ao buscar livros" });
        }
    }
    async createBook(req, res) {
    try {
      const {
        title,
        author,
        publishedAt 
      } = req.body;

      if (
        !title ||
        !author ||
        !pulishedAt 
      ) {
        return res
          .status(400)
          .json({ error: "Os campos de Título, Autor e Data de Publicação são obrigatórios" });
      }

      const newBook = await BooksModel.create(
        title,
        author,
        publishedAt 
      );

      if (!newBook) {
        return res.status(400).json({ error: "Erro ao criar livro" });
      }

      res.status(201).json(newBook);
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      res.status(500).json({ error: "Erro ao criar livro" });
    }
  }

}

export default new BooksController();