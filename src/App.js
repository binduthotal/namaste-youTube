import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import WatchVideoContainer from "./components/WatchVideoContainer";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchVideoContainer /> },
    ],
    errorElement:<Error/>
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
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
