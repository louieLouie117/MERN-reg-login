const userController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/api/user", userController.create);
  app.delete("/api/user/delete/:id", userController.delete);
  app.get('/api/user', userController.getAll);
  app.get("/api/user/:id", userController.findOneSingleUser);
  app.put("/api/user/update/:id", userController.update);
};                      
