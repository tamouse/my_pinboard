import styled from "styled-components"
import {
  $colors,
  FullWidthBlockHeader,
  VerticalCollection,
  ListItem,
  DismissableButton,
} from "../../styles"

export const FlashDisplayHeader = FullWidthBlockHeader
export const FlashDisplayList = VerticalCollection
export const FlashDisplayItem = styled(ListItem)`
  background-color: ${({ alertType }) =>
    alertType === "notice" ? $colors.noticeBg : $colors.alertBg};
  color: ${({ alertType }) =>
    alertType === "notice" ? $colors.noticeFg : $colors.alertFg};
  padding: 20px;
  position: relative;
`
export const FlashDisplayItemDismissButton = DismissableButton
