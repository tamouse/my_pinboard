import styled from "styled-components"

export const $tabletWidth = 768

export const $colors = {
  danger: `#dc3545`,
  dangerBg: `#f9d2d2`,
  dangerBrd: `#f5c6cb`,
  dangerFg: `#721c24`,
  dark: `#343a40`,
  darkBg: `#d6d8d9`,
  darkBrd: `#c6c8ca`,
  darkFg: `#1b1e21`,
  info: `#17a2b8`,
  infoBg: `#d2f3f9`,
  infoBrd: `#bee5eb`,
  infoFg: `#0c5460`,
  linkFg: `#007bff`,

  light: `#f8f9fa`,
  lightBg: `#fefefe`,
  lightBrd: `#fdfdfe`,
  lightFg: `#818182`,
  primary: `#007bff`,
  primaryBg: `#cce5ff`,
  primaryBrd: `#b8daff`,
  primaryFg: `#004085`,
  secondary: `#6c757d`,
  secondaryBg: `#e2e3e5`,
  secondaryBrd: `#d6d8db`,
  secondaryFg: `#383d41`,
  success: `#28a745`,
  successBg: `#dffbe4`,
  successBrd: `#c3e6cb`,
  successFg: `#155724`,
  warning: `#ffc107`,
  warningBg: `#f9efd2`,
  warningBrd: `#ffeeba`,
  warningFg: `#856404`,

  defaultFg: `#333`,
  muted: `hsl(0,0%,40%,0.7)`,
}
$colors.alertBg = $colors.dangerBg
$colors.alertFg = `#a7002b`
$colors.noticeBg = $colors.successBg
$colors.noticeFg = `#2e7d2e`

export const ButtonDefault = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${$colors.defaultFg};
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  display: block;
  padding: 5px 10px;
  margin: 0;
`
export const ButtonPrimary = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.primary};
  border-color: ${$colors.primaryBrd};
`
export const ButtonSecondary = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.secondary};
  border-color: ${$colors.secondaryBrd};
`
export const ButtonSuccess = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.success};
  border-color: ${$colors.successBrd};
`
export const ButtonWarning = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.warning};
  border-color: ${$colors.warningBrd};
`
export const ButtonDanger = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.danger};
  border-color: ${$colors.dangerBrd};
`
export const ButtonInfo = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.info};
  border-color: ${$colors.infoBrd};
`
export const ButtonDark = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.dark};
  border-color: ${$colors.darkBrd};
`
export const ButtonLight = styled(ButtonDefault)`
  color: white;
  background-color: ${$colors.light};
  border-color: ${$colors.lightBrd};
`
export const ButtonLink = styled(ButtonDefault)`
  color: ${$colors.linkFg};
  font-weight: 400;
  text-decoration: none;
`

export const Container = styled.div`
  max-width: 90%;
  margin: auto;
  @media screen and (min-width: ${$tabletWidth}px) {
    max-width: 52em;
  }
`

export const PageTitle = styled.h3``

export const FullWidthBlockHeader = styled.header`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const VerticalCollection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
`

export const DismissableButton = styled.button`
  display: block;
  position: absolute;
  top: 2px;
  right: 2px;
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
  border: none;
  background: none;
  color: #a7a7a7;
`
