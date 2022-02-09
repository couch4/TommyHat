// @ts-nocheck
import { FC, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Object3D, Mesh, TextureLoader } from 'three'
import { a } from "@react-spring/three"
import Tex from '../../assets/textures/camo.jpg'
import { clearTimeout } from 'timers'

interface ModelProps {
  isLoaded?: (model:any) => void
  url: string
  animationProps: any
  data: any
}

let hat = null
let tex = null

new TextureLoader().load(Tex, (texture) => {
  tex = texture
}) 

const Model:FC<ModelProps> = ({ animationProps, isLoaded, url, data }) => {
  const model = useGLTF(url)
  const main = useRef(null)

 
    if(hat) {
      hat.material.color.set(data.color)
      hat.material.wireframe = data.wireframe
      if(data.texture) {
        hat.material.color.set(0xffffff)
        tex.flipY = true
        hat.material.map = tex

      } else {
        hat.material.map = null
      }
      console.log('hat.material', hat.material);
      hat.material.needsUpdate = true
    }



  useEffect(() => {
    if(model.scene && isLoaded){
      isLoaded(model.scene)

      model.scene.traverse( function( object: Object3D | Mesh ) {

        if ( object.material )  {
          object.material.refractionRatio = 0
          object.material.metalness = 0
          object.material.roughness = 1

          if (object.name === "Retopo_hat_LOW002") {
            hat = object
          }
        }
    
    } );

    }
  },[model])

  return (
    <>
     
      <group>
        <a.primitive ref={main} position={[0,0,0]} rotation={[0,Math.PI/1.7,0]} castShadow receiveShadow object={model.scene} />
      </group>
    </>
      
    
    )
}

export default Model;

