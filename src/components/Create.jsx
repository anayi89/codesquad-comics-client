import { useState } from "react";

function Create() {
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
                    <span><h1>CREATE NEW COMIC</h1></span>
                    <div className="create_form">
                        <form>
                            <div className="create_title">
                                <label htmlFor="comic_title">Title:</label>
                                <input type="text" id="comic_title" name="comic_title" defaultValue={title} onChange={updateTitle} required />
                            </div>
                            <div className="create_author">
                                <label htmlFor="comic_author">Author:</label>
                                <input type="text" id="comic_author" name="comic_author" defaultValue={author} onChange={updateAuthor} required />    
                            </div>
                            <div className="select_publisher">
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select id="comic_publisher" defaultValue="select" name="comic_publisher" required>
                                    <option defaultValue="boom_box">BOOM! Box</option>
                                    <option defaultValue="dc_comics">DC Comics</option>
                                    <option defaultValue="harry_n_abrams">Harry N. Abrams</option>
                                    <option defaultValue="icon_books">Icon Books</option>
                                    <option defaultValue="image_comics">Image Comics</option>
                                    <option defaultValue="marvel">Marvel</option>
                                    <option defaultValue="simon_schuster">Simon & Schuster</option>
                                    <option defaultValue="top_shelf_prod">Top Shelf Productions</option>
                                    <option defaultValue="viz_media_llc">VIZ Media LLC</option>
                                    <option defaultValue="select">Select</option>
                                </select>
                            </div>
                            <div className="create_genre">
                                <label htmlFor="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" defaultValue={genre} onChange={updateGenre} required />
                            </div>
                            <div className="create_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" defaultValue={pages} onChange={updatePages} required />
                            </div>
                            <div className="create_rating">
                                <label htmlFor="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" defaultValue={rating} onChange={updateRating} required />
                            </div>
                            <div className="create_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" defaultValue={synopsis} name="comic_synopsis" onChange={updateSynopsis} required></textarea>
                            </div>
                            
                            <input type="submit" defaultValue="Submit" onSubmit={submitForm} />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Create;