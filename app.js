const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connecDB = require("./database");
const booksRoute = require("./apis/books/routes");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/books", booksRoute);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use(notFoundHandler);
app.use(errorHandler);

connecDB();
const port = 8000;

app.listen(port, () => {
  console.log("Server listening on port 8000");
});
