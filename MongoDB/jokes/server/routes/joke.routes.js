const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/joke", jokeController.getAlljoke);
  app.post("/api/joke", jokeController.createNewjoke);
  app.get("/api/joke/:_id", jokeController.getjokeById);
  app.put("/api/joke/:_id", jokeController.updatejoke);
  app.delete("/api/joke/:_id", jokeController.deletejoke);
};