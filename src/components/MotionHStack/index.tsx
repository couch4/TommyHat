// @ts-nocheck
import { HStack, forwardRef } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"
// @ts-ignore
const MotionHStack = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <HStack ref={ref} {...chakraProps} />
  })
)

export default MotionHStack
