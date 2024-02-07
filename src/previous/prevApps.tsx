/*
import MyList from "./MyList";
function App() {
    const [isDark, setIsDark] = useState(false);
  
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Darkmode
        </label>
        <div>
          {" "}
          <MyList
            todos={["hello", "world", "hi"]}
            theme={isDark ? "dark" : "light"}
          />
        </div>
      </>
    );
  }
  
  export default App;
  */
/*
  import Context from "./utils/Context";
  import ImportantList from "./utils/ImportantList";
  
  function App() {
    const [show, setShow] = useState(false);
  
    function changeVisibility() {
      setShow(!show);
    }
  
    return (
      // verbindet die show variable mit der context variable
      <Context.Provider value={show}>
        <ImportantList visible={changeVisibility} />
      </Context.Provider>
    );
  }
  
  export default App;
  */

/* 
import Button from "./components/Button"
import ImportantList from "./components/ImportedList"
import JsxRegeln from "./components/JsxRegeln"

function App() {
  const alertClick = (message: string) => {
    alert(message);
  };
  return (
    <div>
      <Button btnText="Click Me" handleClick={alertClick} />
      <JsxRegeln />
      <ImportantList />
    </div>
  );
}
*/

/*
import { useState } from "react";

function App() {
  const colors = ["red", "green", "yellow"]
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  return   (
   <div style={{backgroundColor, padding: "100px"}}>
    {colors.map((color): JSX.Element => {
      return (
        <button key={color} onClick={() => setBackgroundColor(color)}>{color}</button>
      )
    })}
   </div>
  )
}
*/
