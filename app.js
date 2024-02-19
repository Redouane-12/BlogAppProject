const express = require("express");
const app = express();
const host = "localhost";
const port = 3000;

const posts = require("./routes/postRoutes");
app.use(express.json());

app.use("/posts", posts);

app.get("/", (req, res) => {
  res.send("welcome to our server");
});

app.listen(port, () => {
  console.log(`Server is running on port http://${host}:${port}`);
});
