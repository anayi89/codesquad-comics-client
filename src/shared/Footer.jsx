import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fa_icons = ["fa-brands fa-facebook", "fa-brands fa-square-instagram", "fa-brands fa-twitter"];

function Footer() {
    return (
        <footer>
            <div className="footer row">
                <div className="column">
                    <span><h2>VISIT US</h2></span>
                    <p>ComicSquad Comics</p>
                    <p>123 Dorchester Avenue</p>
                    <p>Boston, MA 02124</p>      
                </div>
                <div className="column">
                    <span><h2>LINKS</h2></span>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="column">
                    <span><h2>FOLLOW US</h2></span>
                    <ul>
                        {fa_icons.map((fa_icon, index) => (
                            <li><FontAwesomeIcon key={index} icon={`${fa_icon}`} /></li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <span><h2>A PRODUCT OF</h2></span>
                    <a href="#"  target="_blank" rel="noopener noreferrer"><img src="../public/images/CodeSquad-logo-a.png" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;