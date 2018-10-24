const user = require('./user');
const category = require('./category');

const routes = (app) => {
    app.route('/api/user')
        .get(user.list)
        .post(user.add);
        
    app.route('/api/user/:id')
        .get(user.get)
        .put(user.update)
        .delete(user.delete);

    app.route('/admin/category')
        .get(category.list)
        .post(category.add);
        
    app.route('/admin/category/:id')
        .get(category.get)
        .put(category.update)
        .delete(category.delete);
};
 
module.exports = routes;