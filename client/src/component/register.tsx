import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const registerUrl = "http://localhost:3000/register";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    state: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(registerUrl, input);
    } catch (error: any) {
      console.log(error);
    }

    setInput({
      firstName: "",
      secondName: "",
      email: "",
      password: "",
      dateOfBirth: "",
      phoneNumber: "",
      state: "",
    });
  };
  return (
    <>
      <div className="w-full sm:w-3/4 md:w-2/4 p-3 my-10 mx-auto bg-teal-300 shadow-sm shadow-gray-400">
        <div className="w-3/4 mx-auto">
          <h2 className="uppercase text-teal-800 text-xl pt-5">
            Register User
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">First Name</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="text"
              name="firstName"
              value={input.firstName}
              placeholder="First Name"
              onChange={(e) =>
                setInput({ ...input, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">Second Name</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="text"
              name="secondName"
              value={input.secondName}
              placeholder="Second Name"
              onChange={(e) =>
                setInput({ ...input, secondName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">Email Address</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="email"
              name="email"
              value={input.email}
              placeholder="Email-Address"
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">Password</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="password"
              name="password"
              value={input.password}
              placeholder="Password"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">Date of Birth</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="date"
              name="dateOfBirth"
              value={input.dateOfBirth}
              placeholder="Date of Birth"
              onChange={(e) =>
                setInput({ ...input, dateOfBirth: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">GSM Number</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              placeholder="GSM Number"
              onChange={(e) =>
                setInput({ ...input, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4 mx-auto p-3 text-teal-800">
            <label htmlFor="">State</label>
            <input
              className="p-2 rounded-md bg-teal-100 outline-none focus:bg-teal-50"
              type="text"
              name="state"
              value={input.state}
              placeholder="State"
              onChange={(e) => setInput({ ...input, state: e.target.value })}
            />
          </div>
          <div className="flex justify-center mb-8">
            <button
              type="submit"
              value="submit"
              className="bg-teal-600 w-3/4 mx-auto shadow-sm shadow-gray-300 hover:bg-teal-400 text-white p-4 border-none outline-none"
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-3 pb-8">
          <p className="text-teal-900">Already a user? : </p>
          <button
            className="text-xl text-teal-900 hover:scale-125 transition-all duration-700"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
