// @ts-nocheck
import React, { Suspense, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Canvas, Loader } from "./components"
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { useBreakpoint } from "./hooks"
import { Flex } from "@chakra-ui/react"
import useStore from "./store"

const mainWrapper = {
  textStyle: "copy",
  minHeight: "100vh",
  width: "100vw",
  position: "absolute" as const,
  zIndex: 1,
  pointerEvents: 'none'
}

const threeWrapper = {
  style: {
    width: '100%',
    minHeight: '100vh',
  },
  shadows: true,
  camera: { fov: 75, near: 0.1, far: 1000, position: [0, 0, 50], shadowMap: true }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function App() {
  const { isLoading } = useStore()
  const isDesktop = useBreakpoint() === "desktop" 

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"LOADING"}>
        <ThreeCanvas {...threeWrapper}>
          <Canvas />
        </ThreeCanvas>
      </Suspense>
      {/* {isLoading && <Loader />} */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
