const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./src/config/db");
const blogRoutes = require("./src/routes/blogroutes");

const notFound = require("./src/middleware/notFound");
const errorHandler = require("./src/middleware/errorMiddleware");

dotenv.config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blog API Server is Running",
  });
});


app.use("/api/blogs", blogRoutes);



app.use(notFound);


app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});