function Update() {
    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>UPDATE COMIC</h1></span>
                    <div className="update_form">
                        <form>
                            <div className="update_title">
                                <label htmlFor="comic_title">Title:</label><input type="text" id="comic_title" name="comic_title" value="title value stored in the database" />
                            </div>
                            <div className="update_author">
                                <label htmlFor="comic_author">Author:</label><input type="text" id="comic_author" name="comic_author" value="author value stored in the database" />
                            </div>
                            <div className="update_publisher">
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
                                <option selected value="publisher_update">publisher value stored in the database</option>
                                </select>
                            </div>
                            <div className="update_genre">
                                <label htmlFor="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" value="genre data stored in the database" />
                            </div>
                            <div className="update_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" value="255" />
                            </div>
                            <div className="update_rating">
                                <label htmlFor="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" value="5" />
                            </div>
                            <div className="update_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" name="comic_synopsis" rows="10" cols="32">synopsis value stored in the database</textarea>
                            </div>
                            
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Update;