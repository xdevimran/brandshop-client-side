import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import NotFound404 from "../components/NotFound404/NotFound404";
import Apple from "../components/Brand/Apple";
import Dell from "../components/Brand/Dell";
import Google from "../components/Brand/Google";
import Hp from "../components/Brand/Hp";
import Lg from "../components/Brand/Lg";
import Xiaomi from "../components/Brand/Xiaomi";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import UpdateProduct from "../components/AddProduct/UpdateProduct";
import ProductDetails from "../components/AddProduct/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("/brand.json").then((res) =>
            res.ok ? res.json() : Promise.reject("Failed to fetch data")
          ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/apple",
        element: <Apple />,
      },
      {
        path: "/dell",
        element: <Dell />,
      },
      {
        path: "/google",
        element: <Google />,
      },
      {
        path: "/hp",
        element: <Hp />,
      },
      {
        path: "/lg",
        element: <Lg />,
      },
      {
        path: "/xiaomi",
        element: <Xiaomi />,
      },
      {
        path: "/add",
        element: (
          <PrivetRoute>
            {" "}
            <AddProduct />{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            {" "}
            <MyCart />{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivetRoute>
            {" "}
            <UpdateProduct />{" "}
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivetRoute>
            <ProductDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8-a10-server-ptdsh54sf-xdevimran.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
