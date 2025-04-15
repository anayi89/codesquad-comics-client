function Create() {
    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>CREATE NEW COMIC</h1></span>
                    <div className="create_form">
                        <form>
                            <div className="create_title">
                                <label htmlFor="comic_title">Title:</label>
                                <input type="text" id="comic_title" name="comic_title" value="Title" />
                            </div>
                            <div className="create_author">
                                <label htmlFor="comic_author">Author:</label>
                                <input type="text" id="comic_author" name="comic_author" value="Author" />    
                            </div>
                            <div className="select_publisher">
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select id="comic_publisher" name="comic_publisher">
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
                                <label htmlFor="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" value="Genre" />
                            </div>
                            <div className="create_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" value="Number of pages" />
                            </div>
                            <div className="create_rating">
                                <label htmlFor="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" />
                            </div>
                            <div className="create_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" name="comic_synopsis">Synopsis</textarea>
                            </div>
                            
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Create;