
const user_routes = require('./user_routes');

const app_routes= (app) => {
    app.use('/api/v1/users', user_routes);
};

module.exports = app_routes;