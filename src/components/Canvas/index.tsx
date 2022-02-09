// @ts-nocheck

import { FC, Suspense, useEffect, useState, useRef } from "react"
import { useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import  * as Dat from 'dat.gui';
import init from 'three-dat.gui'; // Import initialization method
import Model from './Model'
import Hat from '../../assets/mesh/bucketHat.glb'
import useStore from '../../store'

init(Dat);
const gui = new Dat.GUI()

const Canvas: FC = () => {
  const { setIsLoading } = useStore()
  const { camera } = useThree()
  const controls = useRef(null)
  const [data, setData] = useState({ color: '#FFFFFF' })

  const handleLoaded = (model) => {
    setIsLoading(false)

  }

  const handleUpdate = (value: any) => {
    setData({color: value })
  }

  useEffect(() => {

    gui.addColor(data, 'color').onChange(handleUpdate)

    const guiContainer = document.getElementsByClassName('dg ac')[0]
    const closeButton = document.getElementsByClassName('close-button')[0]

    guiContainer.style.margin = '2rem 1rem'
    closeButton.style.display = 'none'

  },[]);
  
  useEffect(() => { 

    if(controls && controls.current) {
      camera.position.set(0,0,6)
      controls.current.update()
    }
  }, [controls])

  return (
    <>
        <Suspense fallback={null}>
          <Model url={Hat} isLoaded={handleLoaded} data={data} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls ref={controls} />
       <directionalLight position={[-100,100,50]} castShadow />
      </>
  )
}

export default Canvas
