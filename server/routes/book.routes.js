const BookController = require('../controllers/book.controller');

module.exports = (app) => {
    app.get("/api/book", BookController.getAllBook);
    app.post("/api/book", BookController.createABook);
    app.get("/api/book/:_id", BookController.getABook);
    app.put("/api/book/:_id", BookController.updateBook);
    app.delete("/api/book/:_id", BookController.deleteBook);
}


