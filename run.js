/**
 * Created by Magic on 2017/3/2.
 */
var express = require('express');
var app = express();
app.use('/',express.static(__dirname));


app.listen(8888);
console.log('server is running');