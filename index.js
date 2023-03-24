const  express = require('express');
const  axios = require('axios');

const  app = express();

  
app.get('/', async (req, res) => {
	res.send('Hello there!');
});
app.get('/show', async (req, res) => {
	res.send('[{"achievement":"BackEnd What?"},{"sayGreeting":"Hello From StackTrek"}]');
});
app.get('/achievement', async (req, res) => {
	res.send('BackEnd What?');
});
app.get('/greet', async (req, res) => {
	res.send('Hello From StackTrek');
});



app.listen(3001, () => {
	console.log('Server listening on port 3001');
});