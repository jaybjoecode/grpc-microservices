const express = require("express");
const cors = require('cors')
const indexRouter = require('./index.routes');
// const userController = require('./controllers/user.controller')
const app = express();
const port = 3000;


app.use(cors({}));
app.use(express.json());

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Gateway http://localhost:${port}`);
});
