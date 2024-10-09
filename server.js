const express = require("express");
const cors = require("cors");

const router = require("./routes/index");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(router);

app.listen(3000, () => {
  console.log("server is ready");
});
