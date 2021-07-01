const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({ username: "david", password: '1234'})
})

app.get('/news', (req, res) => {
   res.status(200).json([
       { 
           title: "news title", 
           id: "23", 
           article: "news article..." ,
           thumbnail: "photo",
           photo: "photo",
           status: "authorized",
           added_id: "Id",
           latitude: "23456",
           longitude: "2349584"
        },

        {
            title: "news title", 
            id: "23", 
            article: "news article..." ,
            thumbnail: "photo",
            photo: "photo",
            status: "authorized",
            added_id: "Id",
            latitude: "23456",
            longitude: "2349584"
        }

   ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})