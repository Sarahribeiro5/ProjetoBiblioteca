import prisma from "../../prisma/prisma.js";

class BooksModel {
    async findAll() {
        const books = await prisma.book.findAll();

        return books;
    }

    async create(data) {
        const book = await prisma.book.create({
            data,
        });

        return book;
    }

}

export default new BooksModel ();