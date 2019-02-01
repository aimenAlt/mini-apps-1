const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

const pathToClientSite = path.join(__dirname, "/client/dist");
const websiteDataSending = express.static(pathToClientSite);


app.use(logger('dev'));
app.use(websiteDataSending);
app.use(bodyParser.json());


app.listen(PORT, function () {
  console.log(`it's over 9000!!!\nkidding, listening @ ${PORT}`);
});