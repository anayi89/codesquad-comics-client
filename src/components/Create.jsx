import { useState } from "react";

function Create() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        pages: 0,
        rating: 5,
        synopsis: ""
    })
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {
        let value = event.target.value
        const name = event.target.name

        if (name === "comic_pages" || name === "comic_rating") {
            value = parseInt(value)
        }

        console.log(value)

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleFormData = (event) => {
        event.preventDefault()
        console.log("This form has been submitted.")
        console.log(formData)

        const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/create"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(formData)
            })
            .then((response) => response.json()
            .then((result) => {
                console.log(result)
                setErrorMessage(result.error.message)
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
        )
    }

    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>CREATE NEW COMIC</h1></span>
                    <div className="create_form">
                        <form onSubmit={handleFormData}>
                            <div className="create_title">
                                <label htmlFor="comic_title">Title:</label>
                                <input type="text" id="comic_title" name="comic_title" defaultValue={"Title"} onChange={handleChange} required />
                            </div>
                            <div className="create_author">
                                <label htmlFor="comic_author">Author:</label>
                                <input type="text" id="comic_author" name="comic_author" defaultValue={"Author"} onChange={handleChange} required />    
                            </div>
                            <div className="select_publisher">
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select id="comic_publisher" name="comic_publisher" required defaultValue={"Select"} onChange={handleChange}>
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
                                <label htmlFor="comic_genre">Genre:</label><input type="text" id="comic_genre" name="comic_genre" defaultValue={"Genre"} onChange={handleChange} required />
                            </div>
                            <div className="create_pages">
                                <label htmlFor="comic_pages">Number of pages:</label><input type="text" id="comic_pages" name="comic_pages" defaultValue={0} onChange={handleChange} required />
                            </div>
                            <div className="create_rating">
                                <label htmlFor="comic_rating">Rating:</label><input type="text" id="comic_rating" name="comic_rating" size="4" defaultValue={5} onChange={handleChange} required />
                            </div>
                            <div className="create_synopsis">
                                <label htmlFor="comic_synopsis">Synopsis:</label><textarea id="comic_synopsis" name="comic_synopsis" onChange={handleChange} defaultValue={"Synopsis"} required></textarea>
                            </div>
                            
                            <input type="submit" defaultValue="Submit" />
                            {errorMessage && <p>{setErrorMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Create