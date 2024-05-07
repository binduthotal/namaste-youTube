import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import WatchVideoContainer from "./components/WatchVideoContainer";
import SearchFilterContainer from "./components/SearchFilterContainer";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
            children: [
              { path: "/", element: <VideoContainer /> },
              { path: "/watch", element: <WatchVideoContainer /> },
              { path: "/results", element: <SearchFilterContainer /> },
            ],
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  /**
   * Header
   * Body
   * SideBar
   * Menu List
   * Main Container
   * Button List
   * Video Container
   * Video Card
   * Footer
   */

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
