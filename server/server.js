import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

import Cards from './dbCards.js'

// APP config
const app = express();
const port = process.env.PORT || 5000;
const connection_url =
  "mongodb+srv://root:1ring2rule@cluster0.o1jh6.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middleware
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(connection_url);

// API endpoints

app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards/all", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});



// Listener

app.listen(port, () => console.log(`LISTING ON PORT : ${port}`));
