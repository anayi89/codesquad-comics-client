import { useState, useEffect } from 'react';
import books from '../data/books';

function Home() {
    const [myBooks, setMyBooks] = useState([])

    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books"

    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((result) => {
            setMyBooks(result.data.books)
            console.log(result.data.books)
        })
        .catch((error) =>{
            console.error(error.message)
        })
    }, [myBooks])

    return (
        <main>
            <div className="content">
                <div className="content_box1">
                    <span><h1>COMICSQUAD COMICS</h1></span>
                    <p>CodeSquad Comics is a collection of graphic novels read by Iyana Garry. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta-information about this collection. Login is only available to the site administrator at this time.</p>
                </div>
                <div className="content_box2">
                    <span><h2>COMPLETE COLLECTION</h2></span>
                    {myBooks.map((book, index) =>(
                        <div className="comic_collection" key={book.id}>
                            <a href="#"><img src={`../../public/images/${book.image}`} /></a>
                            <ul key={index}>
                                <li>{book.title}</li>
                                <li>by {book.author}</li>
                                <li>{book.rating} stars</li>
                                <li><a href="/">Details</a></li>
                            </ul>
                        </div>
                    ))}
                    <button>DISPLAY MORE</button>
                </div>
            </div>
        </main>
    )
}

export default Home