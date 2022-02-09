// @ts-nocheck
import { FC, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Object3D, Mesh } from 'three'
import { a } from "@react-spring/three"

interface ModelProps {
  isLoaded?: (model:any) => void
  url: string
  animationProps: any
  data: any
}

let hat = null

const Model:FC<ModelProps> = ({ animationProps, isLoaded, url, data }) => {
  const model = useGLTF(url)
  const main = useRef(null)
 

  if(hat) {
    hat.material.color.set(data.color)
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

