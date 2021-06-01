import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Get /");
  res.send("GET /");
});

app.post("/", (req, res) => {
  console.log("POST /");
  res.send("POST /");
});

app.listen(5001, () => console.log(`Listening on 5001`));
