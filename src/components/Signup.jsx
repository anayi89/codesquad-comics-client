function Signup({ user }) {
    const submitForm = (e) => {
        console.log("This method has been run.")
        // console.log(user.firstName)
        // console.log(user.lastName)
        // console.log(user.email)
    }

    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>SIGN UP</h1></span>
                    <div className="create_form">
                        <form>
                            <div className="first_name">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" defaultValue="First Name" required />
                            </div>
                            <div className="last_name">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" defaultValue="Last Name" required />
                            </div>
                            <div className="login_email">
                                <label htmlFor="email_address">Email Address:</label>
                                <input type="text" id="email_address" name="email_address" defaultValue="Email" required />
                            </div>
                            <div className="login_password">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <input type="submit" defaultValue="Submit" onSubmit={submitForm} />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup;