const Item = require('../models/item')

exports.postAddItem = (req, res, next) => {
    const title = req.body.title;
    const imgURL = req.body.title;
    const price = req.body.price;
    const description = req.body.description;

    const item = new Item(null, title, imgURL, price, description);
    console.log(req.body.title);
    item.save();
    res.redirect()
}