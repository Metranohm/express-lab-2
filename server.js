//import modules
import express from "express"
import { students } from "./data/students-data.js"

//create express app
const app = express()

//confuigure the app (app.set)
app.set('view engine', 'ejs')

//mount middleware (app.use) 

//mount routes
app.get('/', function(req, res) {
  res.redirect('/students')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})

// the the app to listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000')
})