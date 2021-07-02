import React, { FC, useEffect, useState } from "react"
import { MotionBox, SuspenseImage } from "../../components"
import { Box, VStack } from "@chakra-ui/react"
import {
  cardContent,
  cardHead,
  cardImage,
  cardText,
  cardWrapper,
} from "./styles"

interface ICard {
  cardInfo: {
    title: string
    copy: string
    images: string[]
  }
  offset?: boolean
}

const Card: FC<ICard> = ({ cardInfo: { title, copy, images }, offset }) => {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    if (images) {
      setRandom(Math.floor(Math.random() * images.length))
    }
  }, [images])

  const img = images[random]

  const squish = window.innerHeight < 800

  return (
    <MotionBox {...cardWrapper(squish, offset)}>
      <SuspenseImage {...cardImage(img, squish)} />
      <VStack {...cardContent(squish)}>
        <Box {...cardHead}>{title}</Box>
        <Box {...cardText}>{copy}</Box>
      </VStack>
    </MotionBox>
  )
}

export default Card
