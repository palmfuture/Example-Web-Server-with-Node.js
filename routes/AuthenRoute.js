const Controller = require('../controllers/AuthenController');

module.exports = app => {
    app.post('/login', Controller.Authentication);
    app.post('/register', Controller.Register);
}