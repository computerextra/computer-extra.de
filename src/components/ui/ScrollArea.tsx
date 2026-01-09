import {ScrollArea as ScrollAreaPrimitive} from "@radix-ui/react-scroll-area";
import * as React from "react";

interface ScrollAreaProps {
    children: React.ReactNode
    className?: string
    dataScheme?: string
    fadeOverflow?: boolean | number
    style?: React.CSSProperties
    fullWidth?: boolean
    viewportClasses?: string
}

// https://github.com/PostHog/posthog.com/blob/master/src/components/RadixUI/ScrollArea.tsx#L14

const ScrollArea = ({
    children,
    className = "",
    dataScheme,
    fadeOverflow = false,
    style,
    fullWidth = false,
    viewportClasses = ""
} : ScrollAreaProps) => {
    const fadeHeight = fadeOverflow === true ? 8 : fadeOverflow || 0;
    return (
        <ScrollAreaPrimitive.Root data-scheme={dataScheme} className={`relative overflow-hidden h-full flix-1 [&>div>div]:!block ${fullWidth ? "max-w-screen" : ""} $className`} style={style}>

        </ScrollAreaPrimitive.Root>
    )
}