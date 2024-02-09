const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const characterRouter = require("./routes/characterRouter");
const locationRouter = require("./routes/locationRouter");
const itemRouter = require("./routes/itemRouter");

app.use(cors());
app.use(express.json());
app.use("/api", characterRouter);
app.use("/api", locationRouter);
app.use("/api", itemRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`RPG API app listening at http://localhost:${port}`);
});
