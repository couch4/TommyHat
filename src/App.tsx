// @ts-nocheck
import React, { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Canvas } from "./components"
import { Canvas as ThreeCanvas } from '@react-three/fiber'

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

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"LOADING"}>
        <ThreeCanvas {...threeWrapper}>
            <Canvas />
          </ThreeCanvas>
      </Suspense>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
