import { useState, useEffect } from "react";

export const useControls = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
  };
  const buttons = { 0: "leftClick" };
  const moveByKey = (key: string | number) => keys[key as keyof typeof keys];
  const moveByButton = (button: number) =>
    buttons[button as keyof typeof buttons];

  const [interaction, setInteraction] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: { code: string | number }) =>
      setInteraction((m) => ({
        ...m,
        [moveByKey(e.code)]: true,
      }));
    const handleKeyUp = (e: { code: string | number }) =>
      setInteraction((m) => ({
        ...m,
        [moveByKey(e.code)]: false,
      }));
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    document.addEventListener('mousemove', handleWindowMouseMove);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      console.log(coords.x, coords.y);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, [moveByKey, moveByButton]);

  return [interaction, coords];
};
