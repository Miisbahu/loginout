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
      <form className="mt-20">
        <div className="flex flex-col w-11/12 md:w-2/4 p-5 shadow-sm shadow-gray-500 mx-auto">
          <div className="p-3">
            <label htmlFor="email" className="text-teal-500">
              Email
            </label>
            <input
              className="border border-gray-300 p-3 rounded-md outline-none focus:bg-teal-50 w-full"
              type="text"
              name="email"
              value={input.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="p-3">
            <label htmlFor="email" className="text-teal-500">
              Password
            </label>
            <input
              className="border border-gray-300 p-3 rounded-md outline-none focus:bg-teal-50 w-full"
              type="password"
              name="password"
              value={input.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="flex p-3 justify-center w-full">
            <button
              type="submit"
              className="bg-teal-600 w-2/4 p-3 rounded-sm text-teal-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
