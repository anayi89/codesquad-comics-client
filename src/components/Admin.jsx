import { useState, useEffect } from 'react'
import books from '../data/books'
import { Link } from 'react-router-dom'

function Admin() {
    const [readbook, setReadBook] = useState([])
    const [deletedbook, setDeletedBook] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books"
    
    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((result) => {
            setReadBook(result.data.books)
            console.log(result.data.books)
        })
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message)
        })
    }, [readbook])

    const handleDeletedBook = () => {
        const bookId = books.find((book) => book._id === id)
        let id = bookId

        console.log("bookId: ", bookId)
        console.log("id: ", id)
        console.log("book: ", book)
        
        fetch(`${url}/${id}`, {method: "DELETE"})
            .then((response) => response.json())
            .then((result) => {
                setDeletedBook((book) => ({ ...bookId, [bookId._id]: id._id }))
                console.log(result.data.books)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
    }
    
    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>ADMIN PAGE</h1></span>
                    <button className="add_comic">ADD NEW COMIC</button>
                    <table className="admin_table">
                        <thead>
                            <tr><th>COMIC TITLE</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => 
                                <tr key={book._id}>
                                    <td>{book.title}</td>
                                    <td><Link to="/update"><button>EDIT</button></Link></td>
                                    <td><button onClick={handleDeletedBook}>DELETE</button></td>
                                    {errorMessage && <p>{setErrorMessage}</p>}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default Admin