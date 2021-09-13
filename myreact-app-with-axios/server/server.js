const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
//const bodyParser = require('body-parser');
const database = require('./database/bd')

const userRoute = require('../server/routes/user.routes');
const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true, useUnifiedTopology:true
}).then(()=>{
    console.log('Database connection successful')
},
error=>{
    console.log('Database could not be connected : '+ error)
}
)

const app= express();

// let's use the middlewares 


app.use(express.json());
app.use(express.urlencoded({ 
    extended :true
}))
app.use(cors());
app.use('/users', userRoute)



// Error Handling

app.use((req, res, next)=>{
    // eslint-disable-next-line no-undef
    res.status(404).send('Unable to find the requested resource!')
});

app.use(function(err, req, res, next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode= 500;
    res.status(err.statusCode).send(err.message)
})
app.listen(port,()=>{
    console.log('Connected to ' + port)
})