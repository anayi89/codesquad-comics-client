function Login({ user }) {
    const submitForm = (e) => {
        e.preventDefault()
        console.log("This method has been run.")
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }

    return (
        <main>
            <div className="content">
                <div className="content_box">
                    <span><h1>LOGIN</h1></span>
                    <div className="create_form">
                        <form onSubmit={submitForm}>
                            <div className="login_email">
                                <label htmlFor="email_address">Email address:</label>
                                <input type="text" id="email_address" name="email_address" defaultValue={e.target.email.value} required />
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

export default Login;