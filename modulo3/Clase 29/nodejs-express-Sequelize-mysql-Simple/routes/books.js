const express = require('express');
const router = express.Router();
const Book = require('../database/models/Book');

// INDEX /api/books
router.get('/', (req, res) => {
    Book.findAll().then(books => {
        res.json(books);
    })
})

// CREATE
router.post('/', (req, res) => {
    Book.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post);
    })
});

// READ /api/books/:id
router.get('/:id', (req, res) => {
    Book.findByPk(req.params.id).then(book => {
        res.json(book);
    })
});

// UPDATE /api/books/:id
router.patch('/:id', (req, res) => {
    Book.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/books/:id
router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;