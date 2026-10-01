import { cn } from "@/lib/utils.ts"
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useState,
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
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)

  const isDesktop = useMediaQuery(`(min-width: ${desktopBreakpoint}px)`)
  const canRenderVideo = !desktopOnly || isDesktop

  useEffect(() => {
    if (!canRenderVideo || videoEnabled) {
      return
    }

    let idleCallbackId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const enableVideo = () => {
      setVideoEnabled(true)
    }

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(enableVideo, {
        timeout: 1000,
      })
    } else {
      timeoutId = globalThis.setTimeout(enableVideo, 200)
    }

    return () => {
      if (idleCallbackId != null) {
        window.cancelIdleCallback(idleCallbackId)
      }

      if (timeoutId != null) {
        globalThis.clearTimeout(timeoutId)
      }
    }
  }, [canRenderVideo, videoEnabled])

  return (
    <span className={cn("relative h-full min-h-12", className)} style={style}>
      {poster != null && (
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
      )}

      {canRenderVideo && videoEnabled && (
        <video
          loop
          muted
          autoPlay
          preload="metadata"
          playsInline
          aria-label={alt}
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = playbackRate
          }}
          onPlaying={() => {
            setIsVideoReady(true)
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isVideoReady ? "opacity-100" : "opacity-0",
            className
          )}
          style={style}
        >
          <source src={src} type={getVideoType(src)} />
          {fallbackSrc != null && (
            <source src={fallbackSrc} type={getVideoType(fallbackSrc)} />
          )}
          Ihr Browser unterstützt keine Videos. Bitte aktualisieren Sie auf
          einen modernen Browser.
        </video>
      )}
    </span>
  )
}

export default LazyVideo
