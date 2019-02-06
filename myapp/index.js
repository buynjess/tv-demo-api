const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const tvShows = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.get('/shows', (req, res) => res.send(tvShows))

app.post('/shows', (req, res) => {
    const tvShow = {
        name:req.body.name,
        rating:req.body.rating,
        imgurl:req.body.imgurl
    }
    tvshows.push(tvshow)
    console.log(body)
    res.send(tvShow)
})

app.put('/shows', (req, res) => res.send('PUTing stuff'))

app.delete('/shows', (req, res) => res.send('DELETEin stuff'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))