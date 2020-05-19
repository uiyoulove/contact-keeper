const express = require("express");
const app = express();

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

//connect database
connectDB();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to ContactKeeper API...!!!" })
);

//define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
