// @ts-nocheck

import { FC } from "react"
import { MotionBox } from "../../components"
import { Flex } from "@chakra-ui/react"


import { loaderWrapper } from "./styles"

const Loader: FC = () => {

  return (
    <Flex {...loaderWrapper}>
      <MotionBox>
        LOADING...
      </MotionBox>
    </Flex>
  )
}

export default Loader
