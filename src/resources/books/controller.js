const { prisma } = require("../../utils/database");

const getAll = async (req, res) => {
  try {
    const getAllBooks = await prisma.book.findMany();
    res.json({ data: getAllBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getOneById = async (req, res) => {
  try {
    const idReq = req.params.id;
    const bookToFind = await prisma.book.findUnique({
      where: { id: parseInt(idReq) },
    });
    res.json({ data: bookToFind });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getAllByChosenTopics = async (req, res) => {
  try {
    const booksToFindByTopic = await prisma.book.findMany({
      where: {
        OR: [{ topic: "science" }, { topic: "fiction" }, { topic: "history" }],
      },
      orderBy: { publicationDate: "asc" },
    });
    res.json({ data: booksToFindByTopic });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getRecentFictionBooks = async (req, res) => {
  try {
    const recentFictionBooks = await prisma.book.findMany({
      where: { type: "fiction" },
      orderBy: { publicationDate: "desc" },
    });
    res.json({ data: recentFictionBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getOldNonFictionBooks = async (req, res) => {
  try {
    const oldNonFictionBooks = await prisma.book.findMany({
      where: [{ type: "non-fiction" }, { publicationDate: "2004-01-01" }],
    });
    res.json({ data: oldNonFictionBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const createOneById = async (req, res) => {
  try {
    const booktoCreate = await prisma.book.create({
      data: {
        title: req.body.title,
        type: req.body.type,
        author: req.body.author,
        topic: req.body.topic,
        publicationDate: req.body.publicationDate,
      },
    });
    res.json({ data: booktoCreate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const updateOnebyId = async (req, res) => {
  try {
    const bookToUpdate = await prisma.book.update({
      where: {},
    });
  } catch (error) {}
};

module.exports = {
  getAll,
  getOneById,
  getAllByChosenTopics,
  getRecentFictionBooks,
  getOldNonFictionBooks,
  createOneById,
  updateOnebyId,
};
