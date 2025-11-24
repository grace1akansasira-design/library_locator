import express from "express";
import { Book } from "../models/Book.js";


const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

router.post("/add", async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

router.get("/search/:title", async (req, res) => {
  const book = await Book.findOne({ where: { title: req.params.title } });
  res.json(book);
});

export default router;
