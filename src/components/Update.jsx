import { useEffect, useState } from 'react'
import booksData from '../data/books'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/"
    const { bookId } = useParams()
    const id = booksData[0]._id
    const [book, setBook] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const bookId = booksData.find((book) => book._id === id)
        console.log("bookId: ", bookId)
        localStorage.setItem("Book ID", JSON.stringify(bookId))
        const value = bookId
        console.log("value: ", value)
        setBook((book) => ({ ...bookId, [bookId._id]: value._id }))
        console.log("book: ", book)

        console.log("bookId: ", bookId)
        fetch(`${url}${bookId}`, {method: "GET"})
            .then((response) => response.json())
            .then((result) => {
                setMyBooks(result.data.books)
                console.log(result.data.books)
            })
            .catch((error) =>{
                console.error(error.message)
            })
    }, [])

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [pages, setPages] = useState(0)
    const [rating, setRating] = useState(0)
    const [synopsis, setSynopsis] = useState("")

    const updateTitle = (e) => {setTitle(e.target.value)}
    const updateAuthor = (e) => {setAuthor(e.target.value)}
    const updateGenre = (e) => {setGenre(e.target.value)}
    const updatePages = (e) => {setPages(e.target.value)}
    const updateRating = (e) => {setRating(e.target.value)}
    const updateSynopsis = (e) => {setSynopsis(e.target.value)}

    const submitForm = (e) => {
        e.preventDefault()
        console.log("This form has been submitted.")
        console.log(title)
        console.log(author)
        console.log(genre)
        console.log(pages)
        console.log(rating)
        console.log(synopsis)
    }

    const handleFormData = (e) => {
        e.preventDefault()
        const body = {
            comicTitle: e.target.comic_title.value,
            comicAuthor: e.target.comic_author.value,
            comicPublisher: e.target.comic_publisher.value,
            comicGenre: e.target.comic_genre.value,
            comicPages: e.target.comic_pages.value,
            comicRating: e.target.comic_rating.value,
            comicSynopsis: e.target.comic_synopsis.value
        }
        console.log(body)

        fetch(`${url}${bookId}`, {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                localStorage.setItem("user", JSON.stringify(body));
                navigate("/admin")
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
                    <span><h1>UPDATE COMIC</h1></span>
                    <div className="update_form">
                        <form onSubmit={submitForm}>
                            <div className="update_title">
                                <label htmlFor="comic_title">Title:</label><input type="text" id="comic_title" name="comic_title" defaultValue={(e) => this.handleFormData(comicTitle, e)} onChange={updateTitle} required></input>
                            </div>
                            <div className="update_author">
                                <label htmlFor="comic_author">Author:</label><input type="text" id="comic_author" name="comic_author" defaultValue={(e) => this.handleFormData(comicAuthor, e)} onChange={updateAuthor} required></input>
                            </div>
                            <div className="update_publisher">
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select id="comic_publisher" name="comic_publisher" defaultValue={(e) => this.handleFormData(comicPublisher, e)} required>
                                <option defaultValue="boom_box">BOOM! Box</option>
                                <option defaultValue="dc_comics">DC Comics</option>
                                <option defaultValue="harry_n_abrams">Harry N. Abrams</option>
                                <option defaultValue="icon_books">Icon Books</option>
                                <option defaultValue="image_comics">Image Comics</option>
                                <option defaultValue="marvel">Marvel</option>
                                <option defaultValue="simon_schuster">Simon & Schuster</option>
                                <option defaultValue="top_shelf_prod">Top Shelf Productions</option>
                                <option defaultValue="viz_media_llc">VIZ Media LLC</option>
                                <option defaultValue="publisher_update">publisher value stored in the database</option>
                                </select>
                            </div>
                            <div className="update_genre">
                                <label htmlFor="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" defaultValue={(e) => this.handleFormData(comicGenre, e)} onChange={updateGenre} required></input>
                            </div>
                            <div className="update_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" defaultValue={(e) => this.handleFormData(comicPages, e)} onChange={updatePages} required></input>
                            </div>
                            <div className="update_rating">
                                <label htmlFor="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" defaultValue={(e) => this.handleFormData(comicRating, e)} onChange={updateRating} required ></input>
                            </div>
                            <div className="update_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" name="comic_synopsis" rows="10" cols="32" defaultValue={(e) => this.handleFormData(comicSynopsis, e)} onChange={updateSynopsis} required></textarea>
                            </div>
                            
                            <label type="submit" defaultValue="Submit"></label>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Update;