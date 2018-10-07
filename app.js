const express = require("express"),
      app     = express(),
      port    = process.env.PORT || 3000,
      bodyParser = require("body-parser"),
      path    = require("path");
const gradeRoutes  = require('./routes/gradesR'),
      bookRoutes   = require('./routes/booksR'),
      lessonRoutes = require('./routes/lessonsR');

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next(); 
}); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ======================//

app.get('/', (req, res)=>{
  res.send('ESL in the ROK API Main Page');
});

app.get('/loaderio-ca02ab1b7f27113a28fd1181e1f74c8a.txt', (req, res)=>{
  res.sendFile(path.join(__dirname, '../api', './loaderio-ca02ab1b7f27113a28fd1181e1f74c8a.txt'));
});

app.use('/api', gradeRoutes);
app.use('/api/:gradeID/:bookID', bookRoutes);
app.use('/api/:gradeID/:bookID', lessonRoutes);
// ======================//     
app.listen(process.env.PORT, ()=>{
  console.log(`UP and RUNNING on port: ${port}`);
});