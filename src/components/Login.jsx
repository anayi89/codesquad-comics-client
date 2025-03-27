function Login() {
    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>LOGIN</h1></span>
                    <div className="create_form">
                        <form>
                            <div className="login_email">
                                <label htmlFor="email_address">Email address:</label>
                                <input type="text" id="email_address" name="email_address" value="Email" />
                            </div>
                            <div className="login_password">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;