const express = require('express')
const app = express()
const PORT = 3030

app.get('/', (req, res) => {
    console.log(`GET request to / from ${req.ip}`)
    res.send('Main page!')

})

app.get('/hello', (req, res) => {
    console.log("GET request to hello")

    res.send('Hello-route')
})

console.log("Hej Node")

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}` )
})