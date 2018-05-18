const UserController = require('../controllers/UserController');

module.exports = app => {
    app.get('/users', UserController.index);
    app.get('/user/:id', UserController.find);
    app.post('/users', UserController.create);
    app.patch('/user/:id', UserController.update);
    app.delete('/user/:id', UserController.destroy);
}