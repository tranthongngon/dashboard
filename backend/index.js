const express = require("express");
const morgan = require("morgan");
const db = require("./configs/db");
const cors = require('cors');
const app = express();
const port = 1998;

//route
const route = require("./routes");

app.use(cors())

//connect db
db.connect()

app.use(express.json());
app.use(morgan("combined"));

route(app);

app.listen(port, () => {
  console.log(`dashboard app listening on port ${port}`);
});
