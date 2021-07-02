// @ts-nocheck

import { FC, Suspense, useEffect, useState, useRef } from "react"
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, Html, OrbitControls } from '@react-three/drei'
import { Clock, Vector3 } from 'three'
import { useSpring } from "@react-spring/core"
import Model from './Model'
import Toon from '../../assets/mesh/toonBoomDraco.glb'
import useStore from '../../store'

const object1Pos = [[-1.5,0,28.5],[-20,-25,0],[-200,100,100]]
const object1Rot = [[Math.PI/2,0,0],[0.2,0.5,0],[0,0.5,0]]

const Canvas: FC = () => {
  const { currentSection, setIsLoading } = useStore()
  const { camera } = useThree()
  const clock = useRef(new Clock())
  const [speedUp,setSpeedUp] = useState(false)
  const [swapAnim,setSwapAnim] = useState(0)
  const [shoe,setShoe] = useState(null)
  const [balls,setBalls] = useState(null)

  const obj1Props = useSpring({ 
    position: object1Pos[currentSection], 
    rotation: object1Rot[currentSection], 
    config: { 
      // mass: 5, tension: 1000, friction: 50, precision: 0.0001 
    } 
  })


  const handleLoaded = (model) => {
    // setShoe(model)
    setIsLoading(false)

    //   // console.log(`model`, model)

    //   const ballsGroup = model.children[1]

    //   const balls = ballsGroup.children.filter(val => val.name === 'balls')[0]
    //   setBalls(balls)
    //   updatePos(model)
  }

  const updatePos = (obj) => {
      if(obj){
        // console.log(`currentSection`, currentSection, obj)
      }
      
  }

  useEffect(() => {
    updatePos(shoe)
  },[currentSection])

  camera.position.set = new Vector3(0,100,200)
  camera.fov = 30

  useFrame(() => {
    const delta = clock.current.getDelta();
    const elapsed = clock.current.getElapsedTime()
    const wave = Math.cos(elapsed)*0.5

    if(balls){
      balls.rotation.z -= delta *(1 + currentSection)
    }

  })

  const swapAnimations = () => {
    setSwapAnim(swapAnim === 0 ? 1 : 0)
  }

  const handleMouseDown = () =>{
    setSpeedUp(true)
  }

  const handleMouseUp = () =>{
    setSpeedUp(false)
  }

  return (
    <>
        <Suspense fallback={null}>
          <Model url={Toon} isLoaded={handleLoaded} speedUp={speedUp} swapAnim={swapAnim} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
        <Html style={{transform:'translate(400px, 300px)'}}>
        <button
          onClick={swapAnimations}
          style={{lineHeight:1, background:'black', padding: '1rem', width:'10rem', marginBottom: '1rem'}}
          >Swap animations</button>
          <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{lineHeight:1, background:'black', padding: '1rem', width:'10rem'}}
          >hold to Speed up</button>
        </Html>
       
        <directionalLight position={[50,100,50]} castShadow />
    </>
  )
}

export default Canvas
