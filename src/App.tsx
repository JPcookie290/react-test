//import { useState } from "react";
//import Animal from "./components/Animal";
//import InputControlled from "./components/InputControlled"
//import InputForm from "./components/InputForm"
//import Parent from "./components/Parent";

import CountOnInput from "./components/CountOnInput";

function App() {
  return <CountOnInput />;
}

export default App;

// import Button from "./components/Button"
// import ImportantList from "./components/ImportedList"
// import JsxRegeln from "./components/JsxRegeln"

// function App() {
//   const alertClick = (message: string) => {
//     alert(message)
//   }
//   return   (
//     <div>
//       <Button btnText="Click Me" handleClick={alertClick}/>
//       <JsxRegeln />
//       <ImportantList />
//     </div>
//   )
// }

// function App() {
//   const colors = ["red", "green", "yellow"]
//   const [backgroundColor, setBackgroundColor] = useState(colors[0]);

//   return   (
//    <div style={{backgroundColor, padding: "100px"}}>
//     {colors.map((color): JSX.Element => {
//       return (
//         <button key={color} onClick={() => setBackgroundColor(color)}>{color}</button>
//       )
//     })}
//    </div>
//   )
// }
