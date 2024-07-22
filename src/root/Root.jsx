import App from "./App";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="/registration" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
