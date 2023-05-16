
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const route = require('./routes');
const { connectDB } = require('./config/connect_database');

require('./middlewares/passport');


app.use(
    session({
        secret: process.env.SECRET_SESSION,
        cookie: { maxAge: 60000 },
    }),
);
// override with POST having ?_method=DELETE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());

// use routes


// Connect database
connectDB();
app.listen(port, () => {
    console.log(`sever listening on port ${port}`);
});



class Server {
    constructor () {
        this.initRoute = initRoute()
    }
    initRoute (app ) {
        route(app);
    }
}

module.export = Server()