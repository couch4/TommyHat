// @ts-nocheck
import { VStack, forwardRef } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"
// @ts-ignore
const MotionVStack = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <VStack ref={ref} {...chakraProps} />
  })
)

export default MotionVStack
