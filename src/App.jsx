import { useState } from "react";
import Counter from "./components/common/counter/Counter";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {/* <button onClick={changeMode}>Cambiar modo</button> */}
      {/* <Navbar /> */}
      <ItemListContainer />
      {/* <Counter darkMode={darkMode} /> */}
    </div>
  );
}

export default App;
