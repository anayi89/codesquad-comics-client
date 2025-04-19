import { useEffect, useState } from 'react';
import booksData from '../data/books';
const id = booksData[0]._id

function Update() {
    const [book, setBook] = useState(null)

    useEffect(() => {
        const bookId = booksData.find((book) => book._id === id)
        console.log("bookId: ", bookId)
        localStorage.setItem("Book ID", JSON.stringify(bookId))
        const value = bookId
        console.log("value: ", value)
        setBook((book) => ({ ...bookId, [bookId._id]: value._id }))
        console.log("book: ", book)
    }, [book])

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

    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>UPDATE COMIC</h1></span>
                    <div className="update_form">
                        <form>
                            <div className="update_title">
                                <label htmlFor="comic_title">Title:</label><input type="text" id="comic_title" name="comic_title" defaultValue={title} onChange={updateTitle} required></input>
                            </div>
                            <div className="update_author">
                                <label htmlFor="comic_author">Author:</label><input type="text" id="comic_author" name="comic_author" defaultValue={author} onChange={updateAuthor} required></input>
                            </div>
                            <div className="update_publisher">
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select id="comic_publisher" defaultValue="publisher_update" name="comic_publisher" required>
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
                                <label htmlFor="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" defaultValue={genre} onChange={updateGenre} required></input>
                            </div>
                            <div className="update_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" defaultValue={pages} onChange={updatePages} required></input>
                            </div>
                            <div className="update_rating">
                                <label htmlFor="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" defaultValue={rating} onChange={updateRating} required ></input>
                            </div>
                            <div className="update_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" defaultValue={synopsis} name="comic_synopsis" rows="10" cols="32" onChange={updateSynopsis} required></textarea>
                            </div>
                            
                            <input type="submit" defaultValue="Submit" onSubmit={submitForm}></input>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Update;