const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const corsMiddleware = require("./api/middleware/cors");
const weatherRoutes = require("./api/routes/weather");

const app = express();
// logging http requets
app.use(morgan("combined"));

// parse incoming request bodies
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(helmet())

// CORS
app.use(corsMiddleware);

// Routes
app.use("/v1/", weatherRoutes);

// 404 not found handler
app.use((req, res, next) => {
    const error = new Error("Path not found");
    error.status = 404;
    next(error);
})

// error handler
app.use((error, req, res, next) => {
    console.log(`${req.ip} - ${req.method} - ${error.status || 500} - ${req.originalUrl} - ${error.message}`);
    console.log(error.stack);

    res.status(error.status || 500);
    res.json({
        error: error.message
    });
})

module.exports = app;