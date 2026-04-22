import express from "express";
import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { readdirSync } from "fs";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const _filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filePath);

const routePath = path.resolve(__dirname, "routes");

const routeFiles = readdirSync(routePath);
routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);
  app.use("/", routeModule.default);
});

app.get("/", (req, res) => {
  // Logic to perform data backup goes here
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
