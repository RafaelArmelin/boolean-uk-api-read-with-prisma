const { prisma } = require("../../utils/database");

const getAll = async (req, res) => {
  try {
    const getAllPets = await prisma.pet.findMany();
    res.json({ data: getAllPets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getOneById = async (req, res) => {
  try {
    const idReq = req.params.id;
    const petToFind = await prisma.pet.findUnique({
      where: { id: parseInt(idReq) },
    });
    res.json({ data: petToFind });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAll,
  getOneById,
};
