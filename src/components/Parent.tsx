import { useEffect, useState } from "react";

export default function Parent() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow((prevShow) => !prevShow);
    }, 4000);
  }, []);
  return show && <SideEffects />;
}
function SideEffects() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mount");

    const interval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
    // Unmount
    return () => {
      console.log("Unmount");

      clearInterval(interval);
    };
  }, []);

  return <p>{counter} seconds have passed!</p>;
}
