const express = require('express');
const app = express();
const port = 4000;
const getData = require(`./routes/router`);
const path = require(`path`); 


app.use(`/api/`, getData);
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(`/`, (req, res) => {
    res.status(404)
    // use tag html
    res.send(`<h1> Page not found </h1>`); 
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});