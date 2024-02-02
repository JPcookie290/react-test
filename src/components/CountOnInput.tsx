import { useRef, useState } from "react";

export default function CountOnInput() {
  const [value, setValue] = useState("");
  const counterRef = useRef(0);
  //const [counter, setCounter] = useState(0);

  //creates infinity loop
  //useEffect(() => setCounter(counter + 1));
  //now it works
  //useEffect(() => setCounter(counter + 1), [value]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    counterRef.current++;
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <br />
      Input Changed: {counterRef.current} times
    </>
  );
}
