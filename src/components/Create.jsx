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
                                <label for="comic_title">Title:</label>
                                <input type="text" id="comic_title" name="comic_title" value={title} onChange={updateTitle} required />
                            </div>
                            <div className="create_author">
                                <label for="comic_author">Author:</label>
                                <input type="text" id="comic_author" name="comic_author" value={author} onChange={updateAuthor} required />    
                            </div>
                            <div className="select_publisher">
                                <label for="comic_publisher">Publisher:</label>
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
                                    <option value="select" selected>Select</option>
                                </select>
                            </div>
                            <div className="create_genre">
                                <label for="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" value={genre} onChange={updateGenre} required />
                            </div>
                            <div className="create_pages">
                                <label for="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" value={pages} onChange={updatePages} required />
                            </div>
                            <div className="create_rating">
                                <label for="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" value={rating} onChange={updateRating} required />
                            </div>
                            <div className="create_synopsis">
                                <label for="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" name="comic_synopsis" onChange={updateSynopsis} required>{synopsis}</textarea>
                            </div>
                            
                            <input type="submit" value="Submit" onSubmit={submitForm} />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Create;