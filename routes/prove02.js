const express = require('express');
const router = express.Router();
// const books = []

router.get('/',(req, res, next) => {
    res.render('pages/pr02/prove02', { 
        title: 'Prove 02', 
        path: '/prove02', // For pug, EJS 
        book: '',
        summary: '',
        //books
    });
});

router.post('/submit',(req, res, next) => {
    const title = req.body.title
    const summary = req.body.summary
    /* books.push({
        title,
        summary
    }) */
    res.render('pages/pr02/display02', { 
        title: 'Prove 02', 
        path: '/pr02', // For pug, EJS 
        book: title,
        summary: summary
    });
});
module.exports = router