import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const Create = (props) => {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [numberOfPages, setNumberOfPages] = useState("");
    const [genre, setGenre] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [comments, setComments] = useState("");
    const [bookImageURL, setBookImageURL] = useState("");
    const [errs, setErrs] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/book', {     
            bookTitle,
            bookAuthor,
            numberOfPages,
            genre,
            creationDate,
            comments,
            bookImageURL
        })
            .then((res) => {
                if (res.data.errors){
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/dashboard");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <h5 className="font-weight-bold">Create New Book Entry</h5>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" 
                        name="bookTitle"
                        value={bookTitle}
                        placeholder="Title"
                        onChange = {(e) => setBookTitle(e.target.value) }
                    />
                    {
                        errs.bookTitle ?
                            <span className="error-text">{errs.bookTitle.message}</span> 
                            : null
                    }
                </div>
                <div>
                    <input type="text" 
                        name="bookAuthor"
                        value={bookAuthor}
                        placeholder="Author"
                        onChange = {(e) => setBookAuthor(e.target.value) }
                    />
                    {
                        errs.bookAuthor ?
                            <span className="error-text">{errs.bookAuthor.message}</span> 
                            : null
                    }
                </div>
                <div>
                    <input type="number" 
                        name="numberOfPages"
                        value={numberOfPages}
                        placeholder="# of Pages"
                        onChange = {(e) => setNumberOfPages(e.target.value) }
                    />
                    {
                        errs.numberOfPages ?
                            <span className="error-text">{errs.numberOfPages.message}</span> 
                            : null
                    }
                </div>
                <div>
                    <input type="text" 
                        name="genre"
                        value={genre}
                        placeholder="Genre"
                        onChange = {(e) => setGenre(e.target.value) }
                    />
                    {
                        errs.genre ?
                            <span className="error-text">{errs.genre.message}</span> :
                            null
                    }
                </div>
                <div>
                    <input type="date" 
                        name="creationDate"
                        value={creationDate}
                        placeholder="Creation Date"
                        onChange = {(e) => setCreationDate(e.target.value) }
                    />
                    {
                        errs.creationDate ?
                            <span className="error-text">{errs.creationDate.message}</span> :
                            null
                    }
                </div>
                <div>
                    <input type="text"
                        name="comments"
                        value={comments}
                        placeholder="Comments/Notes"
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>
                <div>
                    <input type="text" 
                        name="bookImageURL"
                        value={bookImageURL}
                        placeholder="Book Image URL"
                        onChange = {(e) => setBookImageURL(e.target.value) }
                    />
                    {
                        errs.bookImageURL ?
                            <span className="error-text">{errs.bookImageURL.message}</span> :
                            null
                    }
                </div>

                <br />
                <div className = "right">
                    <Link to={`/dashboard`} style={{"margin": "auto"}}>Cancel</Link> 
                    <button style={{"marginLeft": "30px"}} type="submit" className="btn btn-primary"> Create </button>
                </div>
            </form>
        </div>
    )
};

export default Create;