import prisma from "../../prisma/prisma.js";

class GenresModel {
    async findAll() {
        const genres = await prisma.genre.findMany();

        return genres;
    }

    async create(
        name,
        numberBooks,
        popularityRanking
    ) {
        const newGenre = await prisma.genre.create({
            data: {
                name,
                numberBooks,
                popularityRanking
            },
        });

        return newGenre;
    }

}

export default new GenresModel ();