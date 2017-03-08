/**
 * Created by Magic on 2017/3/2.
 */
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());
app.use('/',express.static(__dirname));
var router = express.Router();

router.post("/data",function (req,res) {
     if(req.body){

     }
});

app.listen(8888);
console.log('server is running');