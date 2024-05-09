import { Provider, useSelector } from "react-redux";
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
import DemoAboutUseMeno from "./components/DemoAboutUseMeno";

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
              { path: "/demo", element: <DemoAboutUseMeno /> },
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

  const isDarkTheme = useSelector(store=>store.darkMode.isDark)
  return (
    <div className={isDarkTheme ? "bg-gray-900 text-white" : undefined}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
