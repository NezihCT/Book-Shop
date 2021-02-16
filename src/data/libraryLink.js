import Products from "../components/Products";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
import About from "../components/About";
import Home from "../components/Home";
import Search from "../components/Search";
import ProductDetails from "../components/ProductDetails";

const libraryLink = [
  {
    link: "/",
    title: "Home",
    component: Home,
    isLink: true,
    isExact: true
  },

  {
    link: "/products",
    title: "Products",
    component: Products,
    isLink: true,
    isExact: true
  },
  {
    link: "/products/:details",
    title: "ProductsDetails",
    component: ProductDetails,
    isLink: false,
    isExact: false
  },
  {
    link: "/contact",
    title: "Contact",
    component: Contact,
    isLink: true,
    isExact: false
  },
  {
    link: "/about",
    title: "About",
    component: About,
    isLink: true,
    isExact: false
  },
  {
    link: "/search",
    title: "Search",
    component: Search,
    isExact: false,
    isLink: false
  },
  {
    link: "/404",
    title: "404",
    component: NotFound,
    isLink: false,
    isExact: true
  }
];

export default libraryLink;
