import { useState, useRef, useEffect } from "react";

const useCursor = () => {
  const [cursor, setCursor] = useState({ clientX: 0, clientY: 0 });
  const targetEl = useRef(null);

  const handleMouseMove = (e) => {
    const { clientWidth, clientHeight } = targetEl.current;
    const { clientX, clientY } = e;
    setCursor({
      clientX: parseInt(-clientWidth / 2 + clientX),
      clientY: parseInt(clientHeight / 2 - clientY),
    });
  };

  useEffect(() => {
    targetEl.current.onmousemove = (e) => handleMouseMove(e);
  }, [cursor]);

  return [cursor, targetEl];
};

export default useCursor;
