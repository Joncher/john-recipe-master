import React, {useState} from "react";
import style from "./Style";
import NavMenu from "./components/NavMenu"; 
import MediaCard from "./components/RecipeCards";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import "./App.css";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
]);

function App() {
  const [data, setData] = useState(null);
  const [content, setContent] = useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App" style={style.container}>
      <NavMenu/>
      <RouterProvider router={router}>
        {content}
      </RouterProvider>
    </div>
  );
}

export default App;