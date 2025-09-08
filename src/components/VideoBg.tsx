import { useRef } from "react";

export default function VideoBg() {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const setPlayBack = () => {
    if (videoRef.current == null) return;
    videoRef.current.playbackRate = 0.5;
  };

  return (
    <video
      ref={videoRef}
      src="/videos/bg.mp4"
      autoPlay
      loop
      playsInline
      onCanPlay={setPlayBack}
      muted
      className="fixed top-0 left-0 right-0 bottom-0 z-[-2] w-full h-full object-cover"
    />
  );
}
