require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Define Our middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic Get Route Created
app.get("/", (req, res) => res.send({ data: "Node Mailer Express API" }));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
