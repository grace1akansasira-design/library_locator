import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/Book.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("E-Library Backend Running with MySQL");
});

sequelize.sync()
  .then(() => console.log("Database & tables synced"))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
