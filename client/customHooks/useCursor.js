import { useEffect, useRef, useState } from "react";
import MyApp from "../pages/_app";

const useCursor = () => {
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursor({clientX, clientY});
  };

  const [cursor, setCursor] = useState();
  const targetEl = useRef(null);

  useEffect(() => {
    targetEl.current.onmousemove = (e) => handleMouseMove(e);
    console.log(targetEl)
  }, []);

  return [cursor, targetEl];
};

export default useCursor;
