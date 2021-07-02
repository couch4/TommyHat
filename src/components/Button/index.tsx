import { FC } from "react"
import { Box } from "@chakra-ui/react"
import { button } from "./styles"

interface IButton {
  text: string
  onClick: () => void
}

const Button: FC<IButton> = ({ text, onClick }) => {

  return (
    <Box {...button} onClick={onClick}>
      {text}
    </Box>
  )
}

export default Button
