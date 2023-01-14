import axios from "axios";
import { useState } from "react";

const loginUrl = "http://localhost:3000/login";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: any) => {
    console.log(input);
    e.preventDefault();
    try {
      const res = await axios.post(loginUrl, input);
      console.log(res.data);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <>
      <form>
        <div className="bg-gray-400 p-3 w-3/4 mx-auto">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={input.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="bg-gray-400 p-3 w-3/4 mx-auto">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="bg-gray-400 p-3 w-3/4 mx-auto">
          <input
            type="button"
            name="submit"
            value="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
