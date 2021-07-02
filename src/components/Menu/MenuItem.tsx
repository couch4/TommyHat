import React, { FC, useRef } from "react"
import { MotionBox } from "../../components"
import { menuItem, menuUnderline } from "./styles"

interface IMenu {
  expanded: boolean
  mainMenu?: boolean
  invert?: boolean
  onClick: () => void
  index: number
  currentIndex: number
}

const MenuItem: FC<IMenu> = ({
  expanded,
  children,
  mainMenu,
  invert,
  onClick,
  index,
  currentIndex,
}) => {
  const itemRef = useRef(null)

  const itemHeight = itemRef?.current
    ? // @ts-ignore
      itemRef.current.getBoundingClientRect().height
    : 0

  return (
    <MotionBox
      ref={itemRef}
      {...menuItem(expanded, onClick, itemHeight, index, currentIndex, invert)}
    >
      {children}
      <MotionBox {...menuUnderline} />
    </MotionBox>
  )
}

export default MenuItem
