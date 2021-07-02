import React, { FC } from "react"
import { MotionBox } from "../../components"
import {
  copyHead,
  copySub,
  copyText,
  copyUnderline,
  copyWrapper,
} from "./styles"

interface ICopyBlock {
  active: boolean
  head: string
  sub: string
  invert?: boolean
  copy?: string
  underline?: boolean
  offset?: boolean
  copyWidth?: number
}

const CopyBlock: FC<ICopyBlock> = ({
  active,
  head,
  sub,
  invert,
  copy,
  underline,
  offset,
  copyWidth,
}) => {
  return (
    <MotionBox {...copyWrapper(active)}>
      <MotionBox {...copyHead(invert)}>{head}</MotionBox>
      <MotionBox {...copySub(invert)}>{sub}</MotionBox>
      {underline && <MotionBox {...copyUnderline(invert, offset)} />}
      {copy && (
        <MotionBox {...copyText(invert, offset, copyWidth)}>{copy}</MotionBox>
      )}
    </MotionBox>
  )
}

CopyBlock.defaultProps = {
  invert: false,
  underline: false,
  offset: false,
}

export default CopyBlock
