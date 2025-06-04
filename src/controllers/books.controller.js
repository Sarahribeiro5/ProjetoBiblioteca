import booksModel from "../models/books.model.js";

class BooksController {
    async getAllBooks(req, res) {
        try {
            const books = await booksModel.findAll();
            res.status(200).json(books);
        } catch (error) {
            console.error("Erro no controller de livros:", error);
            res.status(500).json({ error: "Erro ao buscar livros" });
        }
    }
}

export default new BooksController();