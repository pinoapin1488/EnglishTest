// server.js
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("."));

// Сохранение результата
app.post("/save", (req, res) => {
  const { score, date } = req.body;
  const data = JSON.parse(fs.readFileSync("results.json", "utf-8") || "[]");
  data.push({ score, date });
  fs.writeFileSync("results.json", JSON.stringify(data, null, 2));
  res.json({ message: "Saved!" });
});

// Получение результатов
app.get("/stats", (req, res) => {
  const data = JSON.parse(fs.readFileSync("results.json", "utf-8") || "[]");
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});