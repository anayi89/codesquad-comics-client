function Signup() {
    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>LOGIN</h1></span>
                    <div className="create_form">
                        <form>
                            <div className="first_name">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" value="First Name" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" value="Last Name" />
                            </div>
                            <div className="login_email">
                                <label htmlFor="email_address">Email Address:</label>
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

export default Signup;