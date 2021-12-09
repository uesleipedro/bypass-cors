import express from "express";
const app = express();
import bodyParser from "body-parser";

const router = express.Router();

import { Default } from "./app/Controller/default.js";
const a = new Default();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methos", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }

  next();
});
app.get("/proxy/:urlToShorten(*)", a.get);
app.post("/proxy/:urlToShorten(*)", a.post);
app.put("/proxy/:urlToShorten(*)", a.put);
app.get("/", a.home);

export { app };
