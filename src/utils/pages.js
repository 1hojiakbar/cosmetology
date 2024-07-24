import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Experience from "../pages/Experience/Experience";
import Clients from "../pages/Clients/Clients";
import Blog from "../pages/Blog/Blog";
import Resaults from "../pages/Resaults/Resaults";
import News from "../pages/News/News";
import Footer from "../pages/Footer/Footer";

const pagesData = [
  {
    id: 1,
    title: "Bosh sahifa",
    element: Home,
    name: "home",
    col: 1,
  },
  {
    id: 2,
    title: "Xizmatlarimiz",
    element: Services,
    name: "services",
    col: 1,
  },
  {
    id: 3,
    title: "Biz xaqimizda",
    element: About,
    name: "about",
    col: 1,
  },
  {
    id: 4,
    title: "Malaka",
    element: Experience,
    name: "experience",
    col: 1,
  },
  {
    id: 5,
    title: "Mijozlar sharhlari",
    element: Clients,
    name: "clients",
    col: 2,
  },
  {
    id: 6,
    title: "Blog",
    element: Blog,
    name: "blog",
    col: 2,
  },
  {
    id: 7,
    title: "Natijalarimiz",
    element: Resaults,
    name: "resaults",
    col: 2,
  },
  {
    id: 8,
    title: "Yangiliklar va aksiyalar",
    element: News,
    name: "news",
    col: 2,
  },
  {
    id: 9,
    element: Footer,
    name: "footer",
  },
];

export default pagesData;
