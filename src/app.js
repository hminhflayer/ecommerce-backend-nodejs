const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

const app = express();

// init middlewares
app.use(morgan("dev")); //dev, combined, common, short, tiny
app.use(helmet());
app.use(compression());

// init db


// init routes
app.get('/', (req, res, next) => {
    const strCompress = `Hello NodeJs`;

    return res.status(200).json({
        message: 'Welcome NodeJS',
        metadata: strCompress.repeat(10000)
    })
})

// handling error

module.exports = app;
