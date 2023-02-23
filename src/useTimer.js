import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    if ((isStart.current = true)) {
      refInterval.current = setInterval(
        () => setTime((time) => time + 1),
        1000
      );
    }
  };
  const stopTimer = () => {
    active.current.disabled = false;
    isStart.current = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    active.current.disabled = false;
    clearInterval(refInterval.current);
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
