import { useState, useRef, useEffect } from "react";

const useCursor = () => {
  const DEFAULT_CURSOR = {
    clientWidth: 0,
    clientHeight: 0,
    clientX: 0,
    clientY: 0,
    rotationX: 0,
    rotationY: 0,
  };

  const [cursor, setCursor] = useState(DEFAULT_CURSOR);
  const targetEl = useRef(null);

  const handleMouseMove = (e) => {
    const { clientWidth, clientHeight } = targetEl.current;
    const { clientX, clientY, layerX, layerY } = e;

    setCursor({
      clientX: clientX - clientWidth / 2,
      clientY: clientY - clientHeight / 2,
      rotationX: -20 * ((layerY - clientHeight / 2) / clientHeight),
      rotationY: 20 * ((layerX - clientWidth / 2) / clientWidth),
      clientWidth: clientWidth,
      clientHeight: clientHeight,
    });
  };

  const handleMouseLeave = () => {
    setCursor(DEFAULT_CURSOR);
  };

  useEffect(() => {
    targetEl.current.onmousemove = (e) => handleMouseMove(e);
    targetEl.current.onmouseleave = () => handleMouseLeave();
  }, [cursor]);

  return [cursor, targetEl];
};

export default useCursor;
