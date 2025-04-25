import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [ user, setUser ] = useState()
    const [ errorMessage, setErrorMessage ] = useState("")
    const url = "https://course-project-codesquad-comics-server.onrender.com/signup"
    const navigate = useNavigate()

    const submitForm = (e) => {
        console.log("This method has been run.")
        // console.log(user.firstName)
        // console.log(user.lastName)
        // console.log(user.email)
    }

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
                localStorage.setItem("user", JSON.stringify(body));
                navigate("/admin")
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
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
                                <input type="text" id="first_name" name="first_name" defaultValue={(e) => this.handleFormData(firstName, e)} required />
                            </div>
                            <div className="last_name">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" defaultValue={(e) => this.handleFormData(lastName, e)} required />
                            </div>
                            <div className="login_email">
                                <label htmlFor="email_address">Email Address:</label>
                                <input type="text" id="email_address" name="email_address" defaultValue={(e) => this.handleFormData(email, e)} required />
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