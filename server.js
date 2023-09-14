//npm run dev

const express = require('express')
const app = express()
const auth = require('./middleware/auth')
const PORT = process.env.PORT || 3030



//För att kunna ta emot JSON i request-bodyn
app.use(express.json())

// middleware-funktipn
const myMiddleware = (req, res, next) => {
    console.log("Hello middleware")
    next()
}

//Weekdays med middleware
const weekdayNames = (req, res, next) => {
    console.log("Hello other middleware")
    req.weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
    next()
}

//Middleware exekveras där den är satt i koden
//app.use(myMiddleware)

app.get('/', (req, res) => {
    console.log(`GET request to / from ${req.ip}`)
    res.send('Main page!')

})

//middleware-funktion

const usersRouter = require('./routes/users.js')
app.use('/users', usersRouter)

//Statiska sidor i public katalogen
app.use('/public', express.static(__dirname + '/public'))

//middleware-funktion, validerar jwt
app.use(auth)

const notesRouter = require('./routes/notes.js')
app.use('/notes', notesRouter)





app.get('/hello', (req, res) => {
    console.log("GET request to hello")

    res.send('Hello-route')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params) //route params
    console.log(req.query) //För query stringen


    res.send(`Hello, ${req.params.name}`)
})

//Weekdays med middleware
app.get('/weekdays/:wd', weekdayNames, (req, res) => {
    const wd = req.params.wd
    res.send(req.weekdays[wd-1])
})

console.log("Hej Node")

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}` )
})