const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const jokeRoutes = require("./server/routes/joke.routes");
jokeRoutes(app);

app.listen(port, () => console.log(`Express running on port ${port}`));