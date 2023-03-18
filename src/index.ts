import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use("/", (req, res) => {
  res.send("Server up and running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
