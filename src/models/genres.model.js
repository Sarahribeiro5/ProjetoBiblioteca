import prisma from "../../prisma/prisma.js";

class GenresModel {
    async findAll() {
        const genres = await prisma.genre.findAll();

        return genres;
    }

    async create(data) {
        const genre = await prisma.genre.create({
            data,
        });

        return genre;
    }

}

export default new GenresModel ();