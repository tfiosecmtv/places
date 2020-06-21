const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 5000;

const placeRouter = require('./placeRouter');

const app = express();
app.use(bodyParser.json());

app.use('/places', placeRouter);


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log("Server is running");
});