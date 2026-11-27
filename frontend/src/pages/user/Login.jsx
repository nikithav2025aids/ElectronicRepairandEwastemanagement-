import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {

  const location = useLocation();
  const navigate = useNavigate();

  const registerdata = location.state;

  const [logindata, setLogindata] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registerdata) {
      setError("Please register first.");
      return;
    }

    if (logindata.username === registerdata.name && logindata.password === registerdata.password)
        { 
        sessionStorage.setItem("username", logindata.username);
        navigate("/dashboard", { state: logindata });
        } else {
      setError("Invalid username or password.");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-teal-100 px-4">

      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">
            ReTechLoop
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Smart Electronics Repair & E-Waste Management
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome Back!
        </h2>

        <p className="text-gray-500 text-sm mt-2 mb-7">
          Login to continue to your account.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input type="text" name="username" placeholder="Enter your username" value={logindata.username} onChange={handleChange}
            required className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>

            <input type="password" name="password" placeholder="Enter your password" value={logindata.password} onChange={handleChange}
            required className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p> )}

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md">Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{" "}

          <span onClick={() => navigate("/register")}
            className="text-teal-700 font-semibold cursor-pointer hover:underline"
          >Register</span></p>
        </div>
    </div>
  );
}

export default Login;