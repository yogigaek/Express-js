const express = require('express');
const app = express();
const port = 3000;

// request/req adalah apa yang dikirimkan ke express
// response/res adalah apa yang di kembalikan oleh express
// ketentuan route adalah memanggil path dan 2 paramer / lebih.
app.get(`/`, (req, res) => {
    res.sendFile(`./navigasi.html`, {root: __dirname})
})

app.get('/about', (req, res) => {
    // use teks biasa
    res.send('Ini adalah halaman about')
});

app.get('/contact', (req, res) => {
    // use json
    res.json({
        nama: `Muhammad Yogi`,
        email: `yogikgaek@gmail.com`,
        noHp: `0882328637263726`,
    })
});

app.get(`/portfolio`, (req, res) => {
    // use send file  (mengambil isi dari file)
    res.sendFile(`./index.html`, {root: __dirname});
})

// id akan berguna sebagai placeholder
app.get(`/product/:id`, (req, res) => {
    res.send(`Product ID :  ${req.params.id} <br> Category : ${req.query.category}`);
})

// use akan berjalan untuk request apapun
// menjalankan middleware (middleware harus di letak dibawah routing karna express menjalankan operasi dari atas ke bawah).
// Note : use di letak di atas route, request dibawah tidak akan berjalan.
app.use(`/`, (req, res) => {
    res.status(404)
    // use tag html
    res.send(`<h1> Page not found </h1>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});