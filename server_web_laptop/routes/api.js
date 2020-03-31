var userController = require('../controllers/userController');
var laptopController = require('../controllers/laptopController');
var commentController = require('../controllers/commentController');
var evaluationController = require('../controllers/evaluationController');
var passport = require('passport');

module.exports = (app) => {
    // guest
    app.post('/api/user/signUp', userController.signUp);
    app.post('/api/user/signIn', userController.signIn);

    // laptop for guest
    app.get('/api/laptop', laptopController.index);
    app.post('/api/laptop/brand', laptopController.filterLaptopByBrand);
    app.post('/api/laptop/name', laptopController.filterLaptopByName);
    app.post('/api/laptop', laptopController.filterLaptop)
    app.get('/api/laptop/:id',  laptopController.show);

    // laptop for admin store, update, delete

    app.post('/api/laptop/admin', passport.authenticate('jwt-admin', {session : false}), laptopController.store);
    app.put('/api/laptop/admin/:id', passport.authenticate('jwt-admin', {session : false}), laptopController.update);
    app.delete('/api/laptop/admin/:id', passport.authenticate('jwt-admin', {session : false}), laptopController.destroy);
    app.post('/api/laptop/admin/:id', passport.authenticate('jwt-admin', {session : false}), laptopController.addQuantity);

    // comment
    app.get('/api/comment', passport.authenticate('jwt-user', {session : false}), commentController.index);
    app.get('/api/comment/:id', passport.authenticate('jwt-user', {session : false}), commentController.show);
    app.post('/api/comment', passport.authenticate('jwt-user', {session : false}), commentController.store);
    app.put('/api/comment/:id', passport.authenticate('jwt-user', {session : false}), commentController.update);
    app.delete('/api/comment/:id', passport.authenticate('jwt-user', {session : false}), commentController.destroy);

    // evaluation

    app.get('/api/evaluation/:id', evaluationController.index);
    app.post('/api/evaluation', passport.authenticate('jwt-user', {session : false}), evaluationController.store);
    app.put('/api/evaluation/:id', passport.authenticate('jwt-user', {session : false}), evaluationController.update);

    // order

    // image

    //user

}