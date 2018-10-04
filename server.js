import config from './config';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
	res.render('index', {
	    content: "Server ready!"
    });
});

server.use(express.static('public'));

server.listen(config.port, () => {
	console.log ('server is listening on port ', config.port);
});