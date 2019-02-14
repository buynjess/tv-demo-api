const express = require('express')
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds133865.mlab.com:33865/tvshows')
const tvshowscollection = db.get('tvshows')
const app = express()
const port = 4000
let tvShows = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

app.get('/shows', async (req, res) => {
    const tvShows = await tvshowscollection.find()
    console.log("this is my get request", tvShows)
    res.send(tvShows)
});

app.post('/shows', async (req, res) => {   
    tvshowscollection.insert(req.body)
    console.log(tvshows)
        // tvShows.push(req.body)
        res.send(tvShows)
    }); 
    

app.put('/shows', (req, res) => res.send('PUTing stuff'))

app.delete('/shows', (req, res) => res.send('DELETEin stuff'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))