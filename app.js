/**
 * To get started install
 * express bodyparser jsonwebtoken express-jwt cors
 * via npm
 * command :-
 * npm install express body-parser jsonwebtoken express-jwt cors--save
 */

// Bringing all the dependencies in
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const cors = require('cors')

// Instantiating the express app
const app = express();


// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// INstantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever', algorithms: ['HS256']
});


// MOCKING DB just for test
let users = [
    {
        id: 1,
        username: 'test',
        password: 'test'
    },
    {
        id: 2,
        username: 'test2',
        password: 'asdf12345'
    }
];

// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Use your DB ORM logic here to find user and compare password
    for (let user of users) { // I am using a simple array users which i made above
        if (username == user.username && password == user.password /* Use your password hash checking logic here !*/) {
            //If all credentials are correct do this
            let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
            res.json({
                sucess: true,
                err: null,
                token
            });
            break;
        }
        else {
            res.status(401).json({
                sucess: false,
                token: null,
                err: 'Username or password is incorrect'
            });
        }
    }
});

app.get('/employe', jwtMW /* Using the express jwt MW here */, (req, res) => {
    res.send(
        [
            {name: 'Test1', position: 'Manager', department: 'HR', age: 41},
            {name: 'Test2', position: 'Manager', department: 'HR', age: 42},
            {name: 'Test3', position: 'Manager', department: 'HR', age: 43},
            {name: 'Test4', position: 'Manager', department: 'HR', age: 44},
            {name: 'Test5', position: 'Manager', department: 'HR', age: 45},
            {name: 'Test6', position: 'Manager', department: 'HR', age: 46},
            {name: 'Test7', position: 'Manager', department: 'HR', age: 47},
            {name: 'DELL', position: 'Manager', department: 'HR', age: 48}, 
        ]); //Sending some response when authenticated
});

// Error handling 
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});

// Starting the app on PORT 3000
const PORT = 8080;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server Started On Port ${PORT}`);
});
