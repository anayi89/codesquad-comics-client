function Header({ name }) {
    return (
        <header>
            <div className="nav_bar">
            <div className="logo">
                <a href="#"><img src="../public/images/CodeSquad-Comics-logo.jpg" /></a>
            </div>
            <div className="logoless_navbar">
                <div className="nav_bar_home">
                    <a href="#">HOME</a>
                </div>
                <div className="nav_bar_about">
                    <a href="#">ABOUT</a>
                </div>
                <div className="nav_bar_login">
                    <a href="#">LOGIN</a>
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