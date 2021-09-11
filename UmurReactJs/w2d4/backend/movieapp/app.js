var createError = require('http-errors');
var express = require('express');
var path = require('path');
var usersRouter = require('./routes/users')
const {MongoClient, ObjectId}= require('mongodb');


// Mongodb atlas connection url
const dbUrl= 'mongodb+srv://Eyasuberhane:JlMa7IfmrZZcXyXM@cluster0.5tch6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//databaseName
const dbName = 'eyasub'
async function main(){
const myconnection = await MongoClient.connect(dbUrl,{
  useNewUrlParser:true,
  useUnifiedTopology: true
});
const db = myconnection.db(dbName);
const moviesCollection =db.collection('movies')

const movies = await getMovies(moviesCollection);
movies.forEach((movie) => {movie})

//Add a new movie to the database
const newMovie={
  title:'The Shaw...',
  rating:5, 
  genre:"comedy"
}
console.log(await addNewMovie(moviesCollection, newMovie))

}
main()
.then(console.log)
.catch(console.error)
.finally(()=>{if(!myconnection) myconnection.close();})

const getMovies = async function(collection){
  const qryResults = await collection.find({}).toArray();
  return qryResults;
}
const addNewMovie = async function(collection, newMovie){
  const inserted = await collection.insertOne(newMovie);
  return insertResult;
}
var app = express();

// view engine setup

app.set('view engine', 'jade');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(1234,()=>console.log('listening at 1234'));

