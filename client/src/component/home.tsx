import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex bg-teal-500 text-teal-900 px-5">
        <div className="flex w-2/4 items-center p-3 justify-start">
          <p>Home Page</p>
        </div>
        <div className="flex w-2/4 gap-3 p-3 justify-end">
          <Link
            to="login"
            className="bg-teal-900 text-teal-500 px-2 py-2 rounded-md hover:bg-teal-100"
          >
            Login
          </Link>
          <Link
            to="register"
            className="bg-teal-900 text-teal-500 px-2 py-2 rounded-md hover:bg-teal-100"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
