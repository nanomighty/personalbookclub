import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Details = (props) => {
    const [book, setBook] = useState({});
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/book/" + props._id)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props._id]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/book")
            .then((res) => {
                setAllBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteBook = (bookId) => {
        axios.delete(`http://localhost:8000/api/book/${ bookId }`)
            .then((res) => {
                console.log(res.data);
                setAllBooks(allBooks.filter((book) => book._id !== bookId));
                navigate("/dashboard")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div style={{"height" : "650px"}}>
            <div style={{"display": "block"}}>
                <svg style={{ "marginLeft": "20px"}} onClick={ () => navigate(`/dashboard`)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path  d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>

                <svg style={{ "marginLeft": "40px"}} onClick={() => deleteBook(book._id)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg> 
            </div>
            <div className="floatLeft">        
                    {
                        book.bookImageURL ? 
                        <img style={{"display": "block", "width" : "50%", "maxHeight": "550px", "margin":"0 auto"}} src={book.bookImageURL} alt={book.bookTitle} />
                        : null
                    }
            </div>
            <div className="floatRight">
                    <h4 className="font-weight-bold">Details</h4>
                            <h6 className="font-weight-bold left">TITLE:</h6>
                            <p>{book.bookTitle}</p>
                            <h6 className="font-weight-bold left">AUTHOR:</h6>
                            <p>{book.bookAuthor}</p>
                            <h6 className="font-weight-bold left"># OF PAGES:</h6>
                            <p>{book.numberOfPages}</p>
                            <h6 className="font-weight-bold left">GENRE: </h6>
                            <p>{book.genre}</p>
                            <h6 className="font-weight-bold left">CREATION DATE:</h6>
                            <p>{book.creationDate}</p>
                            <h6 className="font-weight-bold left">COMMENTS/NOTES:</h6>
                            <p>{book.comments}</p>
                            <h6 style={{"display": "inline-block", "marginRight": "15px"}}className="font-weight-bold left">FINISHED READING?</h6>
                            <span>
                                    {
                                        book.read ? 
                                        <span>Yes</span> : <span>no</span>
                                    }
                            </span>
                        <div className="right">
                            <button className="btn btn-primary" onClick={() => navigate(`/dashboard/books/${book._id}/edit`)}>Edit</button>
                        </div>
                        </div>
        </div>
    )
};

export default Details;

