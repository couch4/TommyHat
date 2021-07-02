import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./styles/theme"

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
)
