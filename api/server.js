const express = require("express");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const Router = require("./src/routes");

const dotenv = require("dotenv");
dotenv.config();
const env = process.env;

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

mongoose.connect(
  `mongodb+srv://${env.MONGODB_URL}?retryWrites=true&w=majority` ||
    "mongodb://localhost:27017/SofkaRT"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3001, () => {
  console.log("Server listening at 3001");
});
