function Header() {
    const { user, setUser } = () => {this.props}
    return (
        <header>
            <div className="nav_bar">
            <div className="logo">
                <a href="/"><img src="../images/CodeSquad-Comics-logo.jpg" /></a>
            </div>
            <div className="logoless_navbar">
                <div className="nav_bar_home">
                    <a href="/">HOME</a>
                </div>
                <div className="nav_bar_about">
                    <a href="/about">ABOUT</a>
                </div>
                <div className="nav_bar_login">
                    <a href="/login">LOGIN</a>
                </div>
                <div onLoad={setUser}>
                    {user}
                </div>
            </div>
          </div>
        </header>
    )
}

export default Header