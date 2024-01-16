import "./App.css";
import Main from "./Landing/landing";
import Quotes from "./Quotes/quote";
import Restaurants from "./Restaurants/Restaurants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Main></Main> },
      {
        path: "/quote",
        element: <Quotes />,
      },
      {
        path: "/restaurant",
        element: <Restaurants></Restaurants>,
      },
      //   {
      //     path: "/food",
      //     element: <Food></Food>,
      //   },
    ],
    errorElement: <p>This is an Error</p>,
  },
]);

function App() {
  return (
    <div className="relative">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
