import { useEffect, useState } from 'react';
import booksData from '../data/books';
const id = booksData[0].id

function Update() {
    const [book, setBook] = useState(null)

    useEffect(() => {
        const bookId = booksData.find((book) => book.id === id)
        localStorage.setItem("Book ID", JSON.stringify(bookId))
        const value = bookId
        setBook((book) => ({ ...book, [book.id]: value }))
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
                                <label htmlFor="comic_title">Title:</label><LabelInput type="text" id="comic_title" name="comic_title" value={title} onChange={updateTitle} required></LabelInput>
                            </div>
                            <div className="update_author">
                                <label htmlFor="comic_author">Author:</label><LabelInput type="text" id="comic_author" name="comic_author" value={author} onChange={updateAuthor} required></LabelInput>
                            </div>
                            <div className="update_publisher">
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select id="comic_publisher" name="comic_publisher" required>
                                <option value="boom_box">BOOM! Box</option>
                                <option value="dc_comics">DC Comics</option>
                                <option value="harry_n_abrams">Harry N. Abrams</option>
                                <option value="icon_books">Icon Books</option>
                                <option value="image_comics">Image Comics</option>
                                <option value="marvel">Marvel</option>
                                <option value="simon_schuster">Simon & Schuster</option>
                                <option value="top_shelf_prod">Top Shelf Productions</option>
                                <option value="viz_media_llc">VIZ Media LLC</option>
                                <option selected value="publisher_update">publisher value stored in the database</option>
                                </select>
                            </div>
                            <div className="update_genre">
                                <label htmlFor="comic_genre">Genre:</label><LabelInput type="text" id="comic_genre" name="comic_genre" value={genre} onChange={updateGenre} required></LabelInput>
                            </div>
                            <div className="update_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><LabelInput type="text" id="comic_pages" name="comic_pages" value={pages} onChange={updatePages} required></LabelInput>
                            </div>
                            <div className="update_rating">
                                <label htmlFor="comic_rating">Rating:</label><LabelInput type="text" id="comic_rating" name="comic_rating" size="4" value={rating} onChange={updateRating} required ></LabelInput>
                            </div>
                            <div className="update_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" name="comic_synopsis" rows="10" cols="32" onChange={updateSynopsis} required>{synopsis}</textarea>
                            </div>
                            
                            <LabelInput type="submit" value="Submit" onSubmit={submitForm}></LabelInput>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Update;