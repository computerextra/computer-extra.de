import { useEffect } from "react";

export default function VideoBackground({ title = "" }: { title?: string }) {
  useEffect(() => {
    const video = document.querySelector("#bgvid") as HTMLVideoElement;
    if (video == null) return;

    video.playbackRate = 1;
  }, []);

  if (title === "Leistungen")
    return (
      <video
        autoPlay
        id="bgvid"
        muted
        loop
        playsInline
        src={"/videos/LeistungenBg.mp4"}
        className="absolute min-w-full object-cover min-h-screen top-0 bottom-0 left-0 right-0 z-10 bg-blue-600"
      />
    );

  return (
    <video
      autoPlay
      id="bgvid"
      muted
      loop
      playsInline
      src={"/videos/VideoBg.mp4"}
      className="absolute min-w-full min-h-screen top-0 bottom-0 left-0 right-0 z-10 aspect-video object-cover bg-blue-600"
    />
  );
}
