import booksData from '../data/books';

function Home() {
    return (
        <main>
            <div className="content">
                <div className="content_box1">
                    <span><h1>COMICSQUAD COMICS</h1></span>
                    <p>CodeSquad Comics is a collection of graphic novels read by Iyana Garry. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta-information about this collection. Login is only available to the site administrator at this time.</p>
                </div>
                <div className="content_box2">
                    <span><h2>COMPLETE COLLECTION</h2></span>
                    {booksData.map((book) => 
                        <div className="comic_collection" key={book.id}>
                            <a href="#"><img src={`../public/images/${book.imageUrl}`} /></a>
                            <ul>
                                <li>{book.title}</li>
                                <li>by {book.author}</li>
                                <li>{book.rating} stars</li>
                                <li><a href="#">Details</a></li>
                            </ul>
                        </div>
                    )}
                    {/* <div className="comic_collection">
                        <a href="#"><img src="public/images/fun-home.jpg" /></a>
                        <ul>
                            <li>Fun Home: A Family Tragicomic</li>
                            <li>by Alison Bechdel</li>
                            <li>5 stars</li>
                            <li><a href="fun_home.html">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/watchmen.jpg" /></a>
                        <ul>
                            <li>Watchmen</li>
                            <li>by Alan Moore</li>
                            <li>5 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/hunter-x-hunter.jpg" /></a>
                        <ul>
                            <li>Hunter X Hunter Vol. 1</li>
                            <li>by Yoshiro Togashi</li>
                            <li>5 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/lumberjanes.jpg" /></a>
                        <ul>
                            <li>Lumberjanes Vol. 1</li>
                            <li>by Noelle Stevenson</li>
                            <li>4 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/one-piece.jpg" /></a>
                        <ul>
                            <li>One Piece, Vol. 1: Romance Dawn</li>
                            <li>by Eiichirio Oda</li>
                            <li>5 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/wake.jpg" /></a>
                        <ul>
                            <li>Wake: The Hidden History of Women-Led Slave Revolts</li>
                            <li>by Rebecca Hall</li>
                            <li>4 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/black-panther.jpg" /></a>
                        <ul>
                            <li>Black Panther: A Nation Under Our Feet Book 1</li>
                            <li>by Ta-Nehisi Coates</li>
                            <li>3 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/the-walking-dead.jpg" /></a>
                        <ul>
                            <li>The Walking Dead, Vol. 1: Days Gone Bye</li>
                            <li>by Robert Kirkman</li>
                            <li>4 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/march.jpg" /></a>
                        <ul>
                            <li>March: Book One</li>
                            <li>by John Lewis</li>
                            <li>5 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/batman.jpg" /></a>
                        <ul>
                            <li>Batman: The Dark Knight Returns</li>
                            <li>by Frank Miller</li>
                            <li>3 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/queer.jpg" /></a>
                        <ul>
                            <li>Queer: A Graphic History</li>
                            <li>by Meg-John Barker</li>
                            <li>4 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="comic_collection">
                        <a href="#"><img src="public/images/parable-of-the-sower.jpg" /></a>
                        <ul>
                            <li>Parable of the Sower</li>
                            <li>by Octavia E. Butler</li>
                            <li>4 stars</li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div> */}
                    <button>DISPLAY MORE</button>
                </div>
            </div>
        </main>
    )
}

export default Home;