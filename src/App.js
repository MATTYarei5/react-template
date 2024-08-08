import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextPlaying = !playing;
    setPlaying(nextPlaying);

    if (nextPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <video
        width="250"
        ref={ref}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={handleClick}>{playing ? "Pause" : "Play"}</button>
    </>
  );
}
