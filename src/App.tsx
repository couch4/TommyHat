// @ts-nocheck
import React, { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { ACESFilmicToneMapping, sRGBEncoding, setAnisotropy } from 'three'
import { Canvas } from "./components"
import { Canvas as ThreeCanvas } from '@react-three/fiber'

const threeWrapper = {
  style: {
    width: '100%',
    minHeight: '100vh',
  },
  shadows: true,
  camera: { fov: 75, near: 0.1, far: 1000, position: [0, 0, 50], shadowMap: true },
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function App() {

  const onMount = ({ gl }: any) => {
    gl.toneMappingExposure = 0.5
    gl.physicallyCorrectLights = true
    gl.toneMapping = ACESFilmicToneMapping
    gl.outputEncoding = sRGBEncoding
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"LOADING"}>
        <ThreeCanvas {...threeWrapper} onCreated={onMount} shadowMap>
            <Canvas />
          </ThreeCanvas>
      </Suspense>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default App
