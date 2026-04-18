import { useIsVisible } from "@/hooks/useIsVisible.tsx"
import { cn } from "@/lib/utils.ts"
import {
  type CSSProperties,
  type Ref,
  useCallback,
  useEffect,
  useRef,
} from "react"

type VideoComponentProps = {
  src: string
  poster?: string
  alt?: string
  playbackRate?: number
  className?: string
  style?: CSSProperties
}

const LazyVideo = ({
  src,
  poster,
  playbackRate = 1,
  style = undefined,
  alt,
  className = "",
}: VideoComponentProps) => {
  const { isVisible, targetRef } = useIsVisible(
    { root: null, rootMargin: "200px", threshold: 0.1 },
    false
  )

  const videoRef = useRef<HTMLVideoElement>(null)

  const startVideoOnMouseMove = useCallback(async () => {
    if (videoRef.current == null) return
    try {
      await videoRef.current.play()
      videoRef.current.playbackRate = playbackRate
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // do nothing
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stopVideoOnMove = useCallback(() => {
    if (videoRef.current == null) return
    try {
      videoRef.current.pause()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // do nothing
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      void startVideoOnMouseMove()
    } else {
      stopVideoOnMove()
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove])

  return (
    <span
      ref={targetRef as unknown as Ref<HTMLSpanElement>}
      className={cn("relative h-full min-h-12", className)}
      style={style}
    >
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        preload={"none"}
        playsInline
        poster={poster}
        aria-label={alt}
        style={style}
        className={cn("block h-full w-full object-cover", className)}
      >
        <source type={"video/mp4"} src={src} />
        Ihr Browser unterstützt keine Videos. Bitte aktualisieren Sie auf einen
        Modernen Browser.
      </video>
    </span>
  )
}

export default LazyVideo
