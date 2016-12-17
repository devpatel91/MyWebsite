var http = require('http')
var server = http.createServer()
var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var models = require('./models');
var Contact = models.Contact;
var chalk = require('chalk');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/node_modules'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html')
})

Contact.sync()
    .then(function() {
        app.listen(1337, function() {
      console.log(chalk.blue('Server') + chalk.red( ' listening') + chalk.blue(' on') + chalk.red(' 1337.'))
    })
})

app.post('/',(req,res,next)=>{

	return Contact.create({
		name:req.body.name,
		message: req.body.message,
		email: req.body.email
	})
	.then((response) => {

		res.send("Sucessfully Submited")
	})
})

