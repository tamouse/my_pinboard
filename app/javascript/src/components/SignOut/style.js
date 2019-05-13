import styled from "styled-components"
import { $colors, ButtonDanger } from "../../styles"

export const SignoutBlock = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`
export const SignoutTitle = styled.p`
  text-align: right;
  padding: 0 10px 0 0;
  margin: 0;
  color: ${$colors.muted};
  font-style: italic;
`
export const SignoutButton = styled(ButtonDanger)``
