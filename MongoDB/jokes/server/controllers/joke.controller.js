const joke = require("../models/joke.model");

const getAlljoke = (req, res) => {
  joke.find()
    .then((alljoke) => res.json(alljoke))
    .catch((err) => console.log(err));
};

const getjokeById = (req, res) => {
  const { params } = req;
  joke.findOne({ _id: params._id })
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const createNewjoke = (req, res) => {
  const { body } = req;
  joke.create(body)
    .then((newjoke) => res.json(newjoke))
    .catch((err) => console.log(err));
};

const updatejoke = (req, res) => {
  joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedjoke) => res.json(updatedjoke))
    .catch((err) => console.log(err));
};

const deletejoke = (req, res) => {
  joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getAlljoke,
  getjokeById,
  createNewjoke,
  updatejoke,
  deletejoke,
};