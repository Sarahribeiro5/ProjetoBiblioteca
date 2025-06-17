import GenresModel from "../models/genres.model.js";

class GenresController {
    async getAllGenres(req, res) {
        try {
            const genres = await GenresModel.findAll();
            res.status(200).json(genres);
        } catch (error) {
            console.error("Erro no controller de gêneros:", error);
            res.status(500).json({ error: "Erro ao buscar gêneros" });
        }
    }
    async createGenre(req, res) {
    try {
      const {
        name,
        numberBooks,
        popularityRanking 
      } = req.body;

      if (
        !name ||
        !numberBooks ||
        !popularityRanking 
      ) {
        return res
          .status(400)
          .json({ error: "Os campos de Nome, Número de Livros e Ranking de Popularidade são obrigatórios" });
      }

      const newGenre = await GenresModel.create(
        name,
        numberBooks,
        popularityRanking 
      );

      if (!newGenre) {
        return res.status(400).json({ error: "Erro ao criar gênero" });
      }

      res.status(201).json(newGenre);
    } catch (error) {
      console.error("Erro ao criar gênero:", error);
      res.status(500).json({ error: "Erro ao criar gênero" });
    }
  }

}

export default new GenresController();