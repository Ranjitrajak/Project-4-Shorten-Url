const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');
const mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://Ranjitmongo:ranjitmongo@cluster0.ul51s.mongodb.net/project-4", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
