const model = require(`./model`);

const home = (req, res) => {
    res.sendFile(__dirname + '/index.html'); //Redirect
};

const contact = (req, res) => {
    // use json
    res.send(model) 
};

const getContactById = (req, res) => {
    // search berdasarkan id
    const results =  model.find(model => model.id == req.params.id)
    res.send(results);
};

module.exports = {
    home,
    contact,
    getContactById
}