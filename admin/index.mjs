import express from "express";
import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const _filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filePath);

app.get("/", (req, res) => {
  // Logic to perform data backup goes here
  res.send("Backend initiated successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
