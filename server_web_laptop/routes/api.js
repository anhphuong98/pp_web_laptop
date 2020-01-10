var userController = require('../controllers/userController');
var passport = require('passport');

module.exports = (app) => {
    app.post('/api/user/signUp', userController.signUp);
    app.post('/api/user/signIn', userController.signIn);
}