const Book = require("../../models/Book.js");

const getAllbooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    next(error);
  }
};

const creatOneBook = async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  if (
    req.body.price === null ||
    req.body.price === undefined ||
    req.body.price === ""
  ) {
    delete req.body.price;
  }
  console.log("Request Body After Price Check:", req.body);
  try {
    const book = await Book.create(req.body);
    if (book) {
      return res.status(201).json(book);
    } else {
      return res.status(404).json({ msg: "create book faild!!!!!" });
    }
  } catch (error) {
    next(error);
  }
};

const getOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ msg: "book with this id, not found!" });
    }
  } catch (error) {
    next(error);
  }
};

const updateOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (book) {
      return res.status(201).json(book);
    } else {
      return res.status(404).json({ msg: "update book faild!" });
    }
  } catch (error) {
    next(error);
  }
};

const delOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id, req.body);
    if (book) {
      return res.status(201).json(book);
    } else {
      return res.status(404).json({ msg: "delete book faild!" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllbooks,
  creatOneBook,
  getOneBook,
  updateOneBook,
  delOneBook,
};
