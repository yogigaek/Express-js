const express = require('express');
const app = express();
const getData = require(`./routes/router`);
const path = require(`path`); 

// Link api Express
app.use(`/api/`, getData);

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(`/`, (req, res) => {
    res.status(404)
    // use tag html
    res.send(`<h1> Page not found </h1>`); 
});

const server = app.listen(process.env.PORT || 4000, () => {
    const port = server.address().port;
    console.log(`http://localhost: ${port}`);
});