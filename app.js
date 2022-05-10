const express = require('express');
const app = express();
const port = 3000;
const logger = require(`morgan`);
const productController = require(`./product/controller`)
const productRouterV2 = require(`./productv2/router`)
const multer = require(`multer`);
const upload = multer({ dest: `uploads`});
const path = require(`path`);
const cors = require(`cors`);

app.use(logger(`dev`));

// cruds Mysql
app.get(`/product`, productController.index);
app.get(`/product/:id`, productController.view);
app.post(`/product/`, upload.single(`image`), productController.store);
app.put(`/product/:id`, upload.single(`image`), productController.update);
app.delete(`/product/:id`, upload.single(`image`), productController.destroy); 


app.use(cors());
app.use(`/api/v2`, productRouterV2);
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(`/`, (req, res) => {
    res.status(404)
    // use tag html
    res.send(`<h1> Page not found </h1>`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
