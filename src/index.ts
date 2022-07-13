import express from "express";

const app = express();

const port: Number = 7000;

app.get("/", (req, res, next) => {});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
