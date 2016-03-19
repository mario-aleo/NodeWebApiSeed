var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

router.get('/', function(req, res) {
    res.json({ mensage: 'Node Server Express Web API' });
});

router.route('/test')
    .post(function(req, res) {
        console.log(req.body.name);
        console.log(req.body.password);
        console.log(req.body.version);
        
        res.json({ message: 'Login OK!' });
    })
    
    .get(function(req, res) {
        res.json({ message: "Please, use post method." });
    });

app.use('/api', router);

app.listen(port);
console.log('Node Server Express Web API Running on Port: ' + port);