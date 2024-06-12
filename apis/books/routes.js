const express = require("express");
const {
  getAllbooks,
  creatOneBook,
  getOneBook,
  updateOneBook,
  delOneBook,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const booksRoute = express.Router();

booksRoute.get("/", getAllbooks);
booksRoute.post("/", upload.single("image"), creatOneBook);
booksRoute.get("/:id", getOneBook);
booksRoute.put("/:id", updateOneBook);
booksRoute.delete("/:id", delOneBook);

module.exports = booksRoute;
