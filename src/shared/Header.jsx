import { useNavigate, Link } from "react-router-dom"

function Header({ name }) {
    const navigate = useNavigate()
    const url = "https://course-project-codesquad-comics-server.onrender.com/logout"
    const [ user, setUser ] = useState()

    const handleFormData = (e) => {
        e.preventDefault()
        const body = {
            firstName: e.target.first_name.value,
            lastName: e.target.last_name.value,
            email: e.target.email_address.value,
            password: e.target.password.value
        }
        console.log(body)

        fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                localStorage.removeItem("user")
                setUser({})
                navigate("/")
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
                navigate("/admin")
            })
    }

    return (
        <header>
            <div className="nav_bar">
            <div className="logo">
                <Link to="/"><img src="../public/images/CodeSquad-Comics-logo.jpg" /></Link>
            </div>
            <div className="logoless_navbar">
                <div className="nav_bar_home">
                    <Link to="/">HOME</Link>
                </div>
                <div className="nav_bar_about">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="nav_bar_login">
                    <Link to="/login">LOGIN</Link>
                </div>
                <div className="nav_bar_logout">
                    <a href="#" onClick={handleLogout}>LOGOUT</a>
                </div>
                <div>
                    {name}
                </div>
            </div>
          </div>
        </header>
    )
}

export default Header;