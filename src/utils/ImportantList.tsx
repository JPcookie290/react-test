import { useContext } from "react"; //import useContext Hook
import Context from "./Context"; //import Context Variable

export default function ImportantList({ visible }: { visible: () => void }) {
  //Read value from Context.Provider
  const isVisible = useContext(Context);
  return (
    <>
      {isVisible && (
        <>
          {" "}
          <h1>I am visible</h1>
          <p>This is a important List</p>{" "}
        </>
      )}
      <button onClick={visible}>{isVisible ? "hide" : "show"}</button>
    </>
  );
}
