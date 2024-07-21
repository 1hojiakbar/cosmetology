import Home from "../components/Home/Home";
import Form from "../components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/registration" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
