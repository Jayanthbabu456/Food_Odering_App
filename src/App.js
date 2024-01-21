import About from "./Components/About";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

const App = () => {
  return (
    <div className="bg-white  py-2 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;
