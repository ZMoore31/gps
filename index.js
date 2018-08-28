const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");

const routes = require("./routes/index.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

routes(app);

app.get("*", (req, res) => {
  res.send("<h1>Missing Page!</h1>");
});

app.listen(port, () => console.log(`listening on port ${port}`));
