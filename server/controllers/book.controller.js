const Book = require('../models/book.model');

module.exports = {
    getAllBook: (req, res) => {
        Book.find({})
            .sort({bookTitle: "ascending"})
            .then(books => {res.json(books)})
            .catch(err => {
                console.log("error found in getAllBook");
                res.json(err);
            });
    },
    createABook: (req, res) => {
        const { bookTitle, bookAuthor, numberOfPages, genre, creationDate, comments, bookImageURL, read } = req.body;
        Book.create({
            bookTitle,
            bookAuthor,
            numberOfPages,
            genre,
            creationDate,
            comments,
            bookImageURL,
            read
        })
            .then((newBook) => {
                res.json(newBook);
            })
            .catch((err) => {
                console.log("error found in createABook");
                res.json(err);
            });
    },
    getABook: (req, res) => {
        Book.findOne({_id: req.params._id})
            .then(book => {res.json(book)})
            .catch(err => {
                console.log("error found in getABook");
                res.json(err);
            });
    },
    updateBook : (req, res) => {
        Book.findOneAndUpdate( {_id: req.params._id}, req.body, {
            new: true,
            runValidators: true,
        })
                .then(updatedBook => {res.json(updatedBook)})
                .catch(err => {
                    console.log("error found in updateBook");
                    res.json(err);
                });
    },
    deleteBook : (req, res) => {
        Book.deleteOne({_id: req.params._id})
            .then(deletedBook => {res.json(deletedBook)})
            .catch(err => {
                console.log("error found in deleteBook");
                res.json(err);
            });
    }
}