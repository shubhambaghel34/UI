import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const MediaPlayer = () => {
  const [counter, setCounter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;
