var todoList = require('../controllers/todoListController');
module.exports = function (app) {
  app.route('/users')
    .get(todoList.get_all_user)
    .post(todoList.create_a_user);
  app.route('/users/:id')
    .get(todoList.read_a_user)
    .put(todoList.update_a_user)
    .delete(todoList.delete_a_user);

}