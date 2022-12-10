import React from "react";
import style from "./Style";
import NavMenu from "./components/NavMenu"; 

import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App" style={style.container}>
      <NavMenu/>
    </div>
  );
}

export default App;