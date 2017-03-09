const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = '80';

app.use('/', express.static(__dirname + '/public'));


app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

