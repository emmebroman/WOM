const express = require('express')
const app = express()
const PORT = 3030

const myMiddleware = (req, res, next) => {
    console.log("Hello middleware")
    next()
}

app.use(myMiddleware)

app.get('/', (req, res) => {
    console.log(`GET request to / from ${req.ip}`)
    res.send('Main page!')

})

app.get('/hello', (req, res) => {
    console.log("GET request to hello")

    res.send('Hello-route')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params) //route params
    console.log(req.query) //För query stringen


    res.send(`Hello, ${req.params.name}`)
})

app.get('/weekdays/:wd', (req, res) => {
    const weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
    res.send(weekdays[req.params.wd-1])
})

console.log("Hej Node")

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}` )
})