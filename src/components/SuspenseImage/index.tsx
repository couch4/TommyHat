// @ts-nocheck

import React from "react"
import { Image } from "@chakra-ui/react"

interface Resource<Payload> {
  read: () => Payload
}

type status = "pending" | "success" | "error"

const createResource: Payload = (
  asyncFn: () => Promise<Payload>
): Resource<Payload> => {
  let status: status = "pending"
  let result: any
  const promise = asyncFn().then(
    (r: Payload) => {
      status = "success"
      result = r
    },
    (e: Error) => {
      status = "error"
      result = e
    }
  )
  return {
    read(): Payload {
      switch (status) {
        case "pending":
          throw promise
        case "error":
          throw result
        case "success":
          return result
      }
    },
  }
}

const cache = new Map<string, any>()

const loadImage = (src: string): Resource<string> => {
  if (!src) return null
  let resource = cache.get(src)
  if (resource) return resource

  resource = createResource<string>(
    () =>
      new Promise((resolve, reject) => {
        const img = new window.Image()
        img.src = src
        img.addEventListener("load", () => resolve(src))
        img.addEventListener("error", () =>
          reject(new Error(`Failed to load image ${src}`))
        )
      })
  )
  cache.set(src, resource)
  return resource
}

const SuspenseImage = ({ src, ...rest }) => {
  if (!src) return null
  loadImage(src).read()

  return <Image src={src} {...rest} />
}

export default SuspenseImage
