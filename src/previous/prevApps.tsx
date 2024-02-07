/*
import useScrolling from "./components/useScrolling";

function App() {
  const isScrolling = useScrolling();
  return (
    <div style={{ height: "1000px" }}>
      <h1 style={{ position: "fixed" }}>{isScrolling.toString()}</h1>
      {isScrolling && (
        <p style={{ position: "fixed", top: "100px" }}>
          hey i am scrolling down
        </p>
      )}
    </div>
  );
}

export default App;
*/
/*
import { useId } from "react";

function App() {
  const id = useId();

  return (
    <label htmlFor={id}>
      Name: <input id={id} type="text" />
    </label>
  );
}

export default App;
*/
/*
import { useEffect, useState, useDebugValue } from "react";

function useTitle() {
  const [title, setTitle] = useState<string>("");
  useDebugValue(`title is ${title}`);
  useEffect(() => {
    setTimeout(() => {
      setTitle("testingDebugValue");
    }, 2000);
  }, [title]);
  return title;
}

function App() {
  const title = useTitle();

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export default App;
*/

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
