const Controller = require('../controllers/UserController');

module.exports = app => {
    app.get('/users', Controller.index);
    app.get('/user/:id', Controller.find);
    app.post('/users', Controller.create);
    app.patch('/user/:id', Controller.update);
    app.delete('/user/:id', Controller.destroy);
}