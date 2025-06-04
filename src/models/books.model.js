import prisma from "../../prisma/prisma.js";

class BooksModel {
    async findAll() {
        const books = await prisma.book.findAll();

        return books;
    }
}

export default new BooksModel ();