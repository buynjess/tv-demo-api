const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 4000

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello Mr Awesome!'))

app.get('/shows', (req, res) => res.send('GETting stuff'))

app.post('/shows', (req, res) => {
    const body=req.body
    console.log(body)
    res.send(body)
})

app.put('/shows', (req, res) => res.send('PUTing stuff'))

app.delete('/shows', (req, res) => res.send('DELETEin stuff'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

