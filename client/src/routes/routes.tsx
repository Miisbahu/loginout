import { Routes, Route } from "react-router-dom";

import Home from "../component/home";
import Register from "../component/register";
import Login from "../component/login";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default Pages;
