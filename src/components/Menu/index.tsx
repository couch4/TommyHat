import React, { FC, useEffect, useState } from "react"
import { useMenu } from "../../hooks"
import { MotionBox } from "../../components"
import { Box, Container } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import { menuContainer, menuWrapper, overlay } from "./styles"
import useStore from "../../store"
import { useSpring, useTransform, useViewportScroll } from "framer-motion"

interface IMenu {
  collapsedIndex?: number
  invert?: boolean
}

const Menu: FC<IMenu> = ({ collapsedIndex, invert }) => {
  const navItems = useMenu()
  const {
    currentSection,
    isLoading,
    setCurrentSection,
  } = useStore()
  const [mouseOver, setMouseOver] = useState(false)
  const [expanded, setExpanded] = useState(currentSection < 0 ? true : false)
  const { scrollY } = useViewportScroll()
  const physics = { damping: 15, mass: 0.27, stiffness: 80 }
  const spring = useSpring(scrollY, physics)

  const paddingY = useTransform(
    spring,
    [0, window.innerHeight],
    [window.innerHeight * 0.35, 63]
  )

  useEffect(() => {
    if (currentSection > -1 && !mouseOver) {
      setExpanded(false)
    } else if (currentSection < 0 && !mouseOver) {
      setExpanded(true)
    }
  }, [currentSection])

  if (!navItems) return null

  const toggleList = (mouseOver: boolean) => {
    setMouseOver(mouseOver)
    if (mouseOver) {
      setExpanded(true)
      document.body.style.overflow = "hidden"
    } else {
      setExpanded(false)
      document.body.style.overflow = "unset"
    }
  }

  const goto = (index: number) => {
    setCurrentSection(index)
    // @ts-ignore
    if (sections[index]) {
      const top =
        // @ts-ignore
        sections[index].getBoundingClientRect().top + scrollY.current + 1

      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const getNavItems = () => {
    return navItems.map((val: { id: number; title: string }, i: number) => {
      return (
        <MenuItem
          key={`navItem_${val.id}`}
          expanded={expanded}
          onClick={() => goto(val.id)}
          index={i}
          currentIndex={currentSection}
          invert={currentSection === 2}
        >
          {val.title}
        </MenuItem>
      )
    })
  }

  const isMain = collapsedIndex === undefined
  let isActive = false
  if (!isMain) {
    isActive = expanded
  }

  return (
    <Box position="absolute">
      <Container {...menuContainer}>
        {!isLoading && (
          <MotionBox
            {...menuWrapper(isMain, isActive, scrollY, paddingY, invert)}
            onMouseEnter={() => toggleList(true)}
            onMouseLeave={() => toggleList(false)}
          >
            {getNavItems()}
          </MotionBox>
        )}
      </Container>
      <MotionBox {...overlay(expanded && currentSection > -1)} />
    </Box>
  )
}

export default Menu
