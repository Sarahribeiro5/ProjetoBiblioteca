import prisma from "../../prisma/prisma.js";

class BooksModel {
    async findAll() {
        const books = await prisma.book.findMany();

        return books;
    }

    async create(
        title,
        author,
        publishedAt
    ) {
        const newBook = await prisma.book.create({
            data: {
                title,
                author,
                publishedAt
            },
        });

        return newBook;
    }

}

export default new BooksModel();