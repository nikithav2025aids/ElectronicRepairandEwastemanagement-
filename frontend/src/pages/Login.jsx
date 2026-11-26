import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        username: "",
        password: ""
    });

    function handlechange(e) {
        e.preventDefault();
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log("login page", formdata);
        alert("Login successful");
        navigate("/dashboard", {
            state: formdata
        });
    }

    return (
        <>
            <div>ReTechLoop Login</div>
            <form onSubmit={handlesubmit}>
                <input type="text" required placeholder="Enter your username" name="username" value={formdata.username} onChange={handlechange} />
                <input type="password" required placeholder="Enter your password" name="password" value={formdata.password} onChange={handlechange} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Login;