const express = require('express');
const app = express();
const getData = require(`./routes/router`);
const path = require(`path`); 

// Link api Express
app.use(`/home/`, getData);

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(`/`, (req, res) => {
    res.status(404)
    // use tag html
    res.send(`<h1> Page not found </h1>`); 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));