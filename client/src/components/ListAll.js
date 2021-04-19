import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';


const ListAll = (props) => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/book")
            .then( (res) => {
                setAllBooks(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [])

    const search = (e) => {
        axios.get("http://localhost:8000/api/book")
            .then((res) => {
                setAllBooks(allBooks.filter((book) => {
                    console.log(res.data);
                    //book.bookTitle
                    //book.bookAuthor
                    //book.genre

                }));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {
        }, 
        {
            withCredentials: true,
        })
        .then((res) => {
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div>
            <div className="topnav">
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <input style={{"margin": "auto 5px", "width": "90%", "height": "30px", "borderRadius": "10px"}} type="text" placeholder="Title, Author, or Genre"></input> 
                    <svg style={{"margin": "auto 5px"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <button style={{"margin": "auto 20px"}} onClick={() => {navigate('/create')}} className="btn btn-primary"> Create </button>
                    <div className="w3-dropdown-hover">
                        <svg className="w3-button w3-black"  style={{"float": "right","margin": "auto 5px"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                        <div className="w3-dropdown-content w3-bar-block w3-border">
                            <a href="#" onClick={(e) => logout(e)} className="w3-bar-item w3-button"> Logout </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="center">
                <table style={{"width": "70%", "margin": "auto"}}>
                    <thead>
                        <th>TITLE</th>
                        <th>BOOK COVER</th>
                        <th>COMMENTS/NOTES</th>
                        <th>FINISHED?</th>
                    </thead>
                    <tbody>
                        {
                            allBooks.map( (book, index) => (
                                <tr  key={index}>
                                    <td><Link to={`/dashboard/books/${book._id}`}>{book.bookTitle}</Link></td>
                                    <td>
                                        {
                                            book.bookImageURL ?
                                            <img onClick={ () => navigate(`/dashboard/books/${book._id}`)} src={book.bookImageURL} alt={book.bookTitle} />
                                            : null
                                        }
                                    </td>
                                    <td>
                                        {book.comments}
                                    </td>
                                    <td>
                                    {
                                        book.read ? 
                                        <span>Yes</span> :
                                        <span>Not yet</span>
                                    }
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                <br />
            </div>
        </div>
    )
};

export default ListAll;