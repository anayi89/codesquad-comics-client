function Signup({ user }) {
    const submitForm = (e) => {
        e.preventDefault()
        console.log("This method has been run.")
    }

    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>SIGN UP</h1></span>
                    <div className="create_form">
                        <form onSubmit={submitForm}>
                            <div className="first_name">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" defaultValue="First Name"/*{user.firstName}*/ required />
                            </div>
                            <div className="last_name">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" defaultValue="Last Name"/*{user.lastName}*/ required />
                            </div>
                            <div className="login_email">
                                <label htmlFor="email_address">Email Address:</label>
                                <input type="text" id="email_address" name="email_address" defaultValue="Email Address"/*{user.email}*/ required />
                            </div>
                            <div className="login_password">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <input type="submit" defaultValue="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup;