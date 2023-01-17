import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [logInPage, setLogInPage] = useState(false);
  const [registerPage, setRegisterPage] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const indexOfLogin = window.location.href.indexOf("login");
  const indexOfRegister = window.location.href.indexOf("register");

  useEffect(() => {
    if (indexOfLogin > -1) {
      console.log("this is login page");
      setLogInPage(true);
      setRegisterPage(false);
    } else if (indexOfRegister > -1) {
      console.log("this is register page");
      setRegisterPage(true);
      setLogInPage(false);
    } else if (indexOfLogin === -1 && indexOfRegister === -1) {
      console.log("this is home page");
      setHomePage(true);
    }
  }, []);

  return (
    <>
      <div className="flex bg-teal-500 text-teal-900 px-5">
        <div className="flex w-2/4 items-center p-3 justify-start">
          <Link
            to="/"
            className="bg-teal-900 text-teal-500 px-2 py-2 rounded-md hover:bg-teal-100"
          >
            Home
          </Link>
        </div>
        <div className="flex w-2/4 gap-3 p-3 justify-end">
          {logInPage ? (
            <Link
              to="login"
              className="bg-teal-900 text-teal-500 px-2 py-2 rounded-md hover:bg-teal-100"
            >
              Login
            </Link>
          ) : registerPage ? (
            <Link
              to="register"
              className="bg-teal-900 text-teal-500 px-2 py-2 rounded-md hover:bg-teal-100"
            >
              Register
            </Link>
          ) : homePage ? (
            <div>
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
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
