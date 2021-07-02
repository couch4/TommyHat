import { FC, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Clock, MathUtils } from 'three'
import { useSpring } from "@react-spring/core"
import { a } from "@react-spring/three"

interface ModelProps {
  isLoaded?: (model:any) => void
  url: string
  animationProps: any
  speedUp: boolean
  swapAnim: number
}

const shoePos = [[0,5,-20],[0,5,50],[-200,100,100]]
const shoeScale = [[0,0,0],[2,2,2],[0,0.5,0]]
const boomScale = [[0,0,0],[0.5,0.5,0.5],[0,0.5,0]]

let speed = 1

const Model:FC<ModelProps> = ({ animationProps, isLoaded, url, speedUp, swapAnim }) => {
  const clock = useRef(new Clock())
  const model = useGLTF(url)
  const [currentStep, setCurrentStep] = useState(0)
  
  const shoe = useRef(null)
  const balls = useRef(null)
  const text = useRef(null)
  const boom = useRef(null)
  const blast = useRef(null)

  useEffect(() => {
    if(swapAnim !== currentStep){
      setCurrentStep(swapAnim)
    }
  },[swapAnim])

  useEffect(() => {
    if(model.scene && isLoaded){
      isLoaded(model.scene)
      setTimeout(() => {
        setCurrentStep(1)
      },2000)

      console.log(`model`, model.scene.children)
    }
  },[model])

  const animateRings = (rings: any[], wave: number) => {
    for(let i = 0;i < rings.length; i++) {
      const ring = rings[i]
      ring.scale.x = 0.8 - wave + 0.1 * i
      ring.scale.z = 0.8 - wave + 0.1 * i
      ring.position.y = 20 - ((rings.length - i)*20) - ((wave * 30) * (rings.length - i))
    }
  }

  useFrame(() => {
    const delta = clock.current.getDelta();
    const elapsed = clock.current.getElapsedTime()
    const wave = Math.cos(elapsed)*0.1

    if (speedUp && speed < 20){
      speed += 1
    }

    if (!speedUp && speed > 1){
      speed -= 0.5
    }

    if(shoe?.current){
      const sh: any = shoe.current
      sh.rotation.z = 0
      sh.rotation.x = 0
      sh.rotation.y += delta * speed
      // sh.rotation.x = MathUtils.lerp(sh.rotation.x, currentStep === 1 ? Math.cos(elapsed / 2) / 8 + 0.25 : 0, 0.1)
      // sh.rotation.z = MathUtils.lerp(sh.rotation.z, currentStep === 1 ? Math.sin(elapsed / 4) / 4 : 0, 0.1)
      // sh.position.y = MathUtils.lerp(sh.position.y, currentStep === 1 ? (-2 + Math.sin(elapsed)) / 3 : -4.3, 0.1) 
    }

    if(text?.current){
      const t: any = text.current
      t.rotation.z = 0
      t.rotation.x = 0
      t.rotation.y -= delta * (speed/10) 
    }

    if(balls?.current){
      const b: any = balls.current
      // b.rotation.z = 0
      // b.rotation.x = 0
      b.rotation.z -= delta * (speed/5) 
    }
    if(boom?.current){
      const b: any = boom.current
      animateRings(b.children, wave)
    }
  })

  // console.log(model.scene)

  const boomProps = useSpring({ 
    scale: boomScale[currentStep], 
    delay: currentStep === 1 ? 150 : 0,
    config: { 
      mass: 5, tension: currentStep === 1 ? 800 : 1000, friction: currentStep === 1 ? 40 : 100,
    } 
  })

  const shoeProps = useSpring({ 
    position: shoePos[currentStep], 
    scale: shoeScale[currentStep], 
    config: { 
      mass: 3, tension: 800, friction: currentStep === 1 ? 40 : 100
    } 
  })

  return (
    <group position={[0,0,-100]} >
      <a.primitive ref={blast} position={[-50,40,50]} castShadow receiveShadow scale={0.5} object={model.scene.children[0]} />
      <a.primitive ref={balls} showAxis castShadow receiveShadow scale={0.5} object={model.scene.children[1]}  />
      <a.primitive ref={shoe} castShadow receiveShadow  object={model.scene.children[2]} {...shoeProps} />
      <a.primitive ref={text} castShadow receiveShadow scale={0.5} object={model.scene.children[3]} />
      <a.primitive ref={boom} castShadow receiveShadow object={model.scene.children[4]} {...boomProps} />
    </group>
    )
}

export default Model;

