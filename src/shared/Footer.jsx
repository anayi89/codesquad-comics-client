import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CodeSquadLogo from "../../public/images/CodeSquad-logo-a.png"

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="column">
                    <span><h2>FOLLOW US</h2></span>
                    <ul>
                        <li key="1"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CodeSquadOrg/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li key="2"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/codesquadpix/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li key="3"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/codesquad.org"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
                <div className="column">
                    <span><h2>A PRODUCT OF</h2></span>
                    <a href="/"  rel="noopener noreferrer"><img src={CodeSquadLogo} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer