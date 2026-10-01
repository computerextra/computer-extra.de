import { useIsVisible } from "@/hooks/useIsVisible.tsx"
import { cn } from "@/lib/utils.ts"
import {
  type CSSProperties,
  type Ref,
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react"

type VideoComponentProps = {
  src: string
  fallbackSrc?: string
  poster?: string
  alt?: string
  playbackRate?: number
  className?: string
  style?: CSSProperties
  desktopOnly?: boolean
  desktopBreakpoint?: number
  posterFetchPriority?: "high" | "low" | "auto"
  posterWidth?: number
  posterHeight?: number
}

const getVideoType = (src: string) => {
  const normalizedSrc = src.toLowerCase().split("?")[0]

  if (normalizedSrc.endsWith(".webm")) {
    return "video/webm"
  }

  if (normalizedSrc.endsWith(".mp4")) {
    return "video/mp4"
  }

  return undefined
}

const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(query)

      mediaQuery.addEventListener("change", callback)

      return () => {
        mediaQuery.removeEventListener("change", callback)
      }
    },
    [query]
  )

  const getSnapshot = useCallback(() => {
    return window.matchMedia(query).matches
  }, [query])

  const getServerSnapshot = useCallback(() => false, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

const LazyVideo = ({
  src,
  fallbackSrc,
  poster,
  playbackRate = 1,
  style,
  alt,
  className = "",
  desktopOnly = false,
  desktopBreakpoint = 768,
  posterFetchPriority = "auto",
  posterHeight,
  posterWidth,
}: VideoComponentProps) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  )

  const videoRef = useRef<HTMLVideoElement>(null)

  const isDesktop = useMediaQuery(`(min-width: ${desktopBreakpoint}px)`)

  const canRenderVideo = !desktopOnly || isDesktop

  const startVideo = useCallback(async () => {
    const video = videoRef.current

    if (video == null || !canRenderVideo) {
      return
    }

    try {
      await video.play()
      video.playbackRate = playbackRate
    } catch {
      // Autoplay kann vom Browser blockiert werden.
    }
  }, [canRenderVideo, playbackRate])

  const stopVideo = useCallback(() => {
    const video = videoRef.current

    if (video == null) {
      return
    }

    video.pause()
  }, [])

  useEffect(() => {
    if (isVisible && canRenderVideo) {
      void startVideo()
      return
    }

    stopVideo()
  }, [canRenderVideo, isVisible, startVideo, stopVideo])

  return (
    <span
      ref={targetRef as unknown as Ref<HTMLSpanElement>}
      className={cn("relative h-full min-h-12", className)}
      style={style}
    >
      {canRenderVideo ? (
        <video
          ref={videoRef}
          loop
          muted
          autoPlay={false}
          preload="none"
          playsInline
          poster={poster}
          aria-label={alt}
          style={style}
          className={cn("block h-full w-full object-cover", className)}
        >
          <source src={src} type={getVideoType(src)} />
          {fallbackSrc != null && (
            <source src={fallbackSrc} type={getVideoType(fallbackSrc)} />
          )}
          Ihr Browser unterstützt keine Videos. Bitte aktualisieren Sie auf
          einen modernen Browser.
        </video>
      ) : (
        poster != null && (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority={posterFetchPriority}
            className={cn("block h-full w-full object-cover", className)}
            style={style}
            width={posterWidth}
            height={posterHeight}
          />
        )
      )}
    </span>
  )
}

export default LazyVideo
