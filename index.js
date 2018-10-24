const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
/*router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
*/

//router.use('/api', require('./src/routes/api'));
//router.use('/admin', require('./src/routes/admin'));
// more routes for our API will happen here

const apiRoutes = require('./src/routes/api');
apiRoutes(app);

const adminRoutes = require('./src/routes/admin');
adminRoutes(app);
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);