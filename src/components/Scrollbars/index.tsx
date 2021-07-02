import React, { FC, useEffect, useRef } from "react"
import { Scrollbar, ScrollbarProps } from "react-scrollbars-custom"

type ScrollbarsProps = ScrollbarProps & {
  disableCrop?: boolean
  insetY?: number
  paddingX?: number
  paddingY?: number
}

const Scrollbars: FC<ScrollbarsProps | null | undefined> = ({
  disableCrop,
  insetY,
  paddingX,
  paddingY,
  ...rest
}) => {
  const scrollRef = useRef()

  const { children } = rest

  useEffect(() => {
    if (scrollRef?.current) {
      const scrollEl = scrollRef.current
      if (disableCrop) {
        //   @ts-ignore
        scrollEl.wrapperElement.style.overflowY = "visible"
        //   @ts-ignore
        scrollEl.scrollerElement.style.overflowY = "visible"
      }
      if (insetY) {
        //   @ts-ignore
        scrollEl.scrollerElement.style.paddingRight = `${insetY}px`
      }
    }
  })

  return (
    <Scrollbar
      //   @ts-ignore
      ref={scrollRef}
      {...rest}
      wrapperProps={{
        // eslint-disable-next-line
        renderer: (props) => {
          const { elementRef, ...restProps } = props
          const { style } = restProps
          return (
            <div
              ref={elementRef}
              {...restProps}
              style={{ ...style }}
              className="scroll-wrapper"
            />
          )
        },
      }}
      trackYProps={{
        // eslint-disable-next-line
        renderer: (props) => {
          const { elementRef, ...restProps } = props
          const { style } = restProps
          return (
            <div
              ref={elementRef}
              {...restProps}
              style={{
                ...style,
                background: "transparent",
                zIndex: 10,
                padding: `${paddingY}px 0`,
              }}
            />
          )
        },
      }}
      thumbYProps={{
        // eslint-disable-next-line
        renderer: (props) => {
          const { elementRef, ...restProps } = props
          const { style } = restProps
          return (
            <div
              ref={elementRef}
              {...restProps}
              style={{
                ...style,
                width: "0.6rem",
                borderRadius: "0.3rem",
                background: "rgba(0,0,0,0.1)",
              }}
            />
          )
        },
      }}
      trackXProps={{
        // eslint-disable-next-line
        renderer: (props) => {
          const { elementRef, ...restProps } = props
          const { style } = restProps
          return (
            <div
              ref={elementRef}
              {...restProps}
              style={{
                ...style,
                background: "transparent",
                zIndex: 10,
                position: "absolute",
                padding: `0 ${paddingX}px`,
              }}
            />
          )
        },
      }}
      thumbXProps={{
        // eslint-disable-next-line
        renderer: (props) => {
          const { elementRef, ...restProps } = props
          const { style } = restProps
          return (
            <div
              ref={elementRef}
              {...restProps}
              style={{
                ...style,
                background: "transparent",
                display: "none",
              }}
            />
          )
        },
      }}
    >
      {children}
    </Scrollbar>
  )
}

export default Scrollbars
