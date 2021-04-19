const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema ({

    bookTitle: {
        type: String,
        minlength: [2, "*Title must be at least 2 characters in length"]
    },
    bookAuthor: {
        type: String,
        minlength: [2, "*Author must be at least 2 characters in length"]
    },
    numberOfPages : {
        type: String,
        min: [1, "*Your number of pages must be at least 1 character in length"]
    },
    genre : {
        type: String,
    },
    creationDate : {
        type: String,
    },
    comments : {
        type: String,
    },
    bookImageURL: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);



