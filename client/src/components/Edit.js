import React, { useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [numberOfPages, setNumberOfPages] = useState("");
    const [genre, setGenre] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [comments, setComments] = useState("");
    const [bookImageURL, setBookImageURL] = useState("");
    const [read, setRead] = useState(false);
    const [errs, setErrs] = useState({});



    useEffect(() => {
        axios.get("http://localhost:8000/api/book/" + props._id)
            .then((res) => {
                let book = res.data;
                setBookTitle(book.bookTitle);
                setBookAuthor(book.bookAuthor);
                setNumberOfPages(book.numberOfPages);
                setGenre(book.genre);
                setCreationDate(book.creationDate);
                setComments(book.comments);
                setBookImageURL(book.bookImageURL);
                setRead(book.read);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props._id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/book/' + props._id, { 
            bookTitle,
            bookAuthor,
            numberOfPages,
            genre,
            creationDate,
            comments,
            bookImageURL,
            read
        })
            .then((res) => {
                if (res.data.errors) {
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/dashboard/books/" + props._id);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };


    return (
        <div>
            <h5 className="font-weight-bold">Edit Book Entry</h5>
            <form onSubmit={submitHandler}>
            <div>
                    <input type="text" 
                        name="bookTitle"
                        value={bookTitle}
                        placeholder="Book Title"
                        onChange = {(e) => setBookTitle(e.target.value) }
                    />
                    {
                        errs.bookTitle ?
                            <span className="error-text">{errs.bookTitle.message}</span> :
                            null
                    }
                </div>
                <div>
                    <input type="text" 
                        name="bookAuthor"
                        value={bookAuthor}
                        placeholder="Book Author"
                        onChange = {(e) => setBookAuthor(e.target.value) }
                    />
                    {
                        errs.bookAuthor ?
                            <span className="error-text">{errs.bookAuthor.message}</span> :
                            null
                    }
                </div>
                <div>
                    <input type="number" 
                        name="numberOfPages"
                        value={numberOfPages}
                        placeholder="Number Of Pages"
                        onChange = {(e) => setNumberOfPages(e.target.value) }
                    />
                    {
                        errs.numberOfPages ?
                            <span className="error-text">{errs.numberOfPages.message}</span> :
                            null
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
                <div>
                    <br />
                    {
                        read ? 
                        <input type="checkbox" 
                        checked
                        name="read"
                        onChange = {(e) => {
                            setRead(!read);
                            } }
                        style={{"display": "inline-block", "margin": "0px", "width": "40px"}}
                        />
                        : 
                        <input type="checkbox" 
                        name="read"
                        onChange = {(e) => {
                            setRead(!read);
                            } }
                        style={{"display": "inline-block", "margin": "0px", "width": "40px"}}
                        />
                    }
                    <label style={{"display": "inline-block"}}>Finished Reading?</label>
                    {
                        errs.read ?
                            <span className="error-text">{errs.read.message}</span> :
                            null
                    }
                </div>
                <div className = "right">
                    <Link to={`/dashboard`} style={{"margin": "auto"}}>Cancel</Link> 
                    <button style={{"marginLeft": "30px"}} type="submit" className="btn btn-primary"> Update Book Entry </button>
                </div>
            </form>
        </div>
    )
};

export default Edit;