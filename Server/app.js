const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./Routes");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, "./client/dist")));
const URI = process.env.URI || 'mongodb+srv://lastsong428:fCrVC6eanYNHSzSi@cluster0.keibgqn.mongodb.net/'



app.use(routes);
app.use(bodyParser.json());
mongoose
  .connect(URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("error:", err);
  });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
