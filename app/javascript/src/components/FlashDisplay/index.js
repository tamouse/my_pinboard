/* globals gon */
import React, { useState } from "react"
import T from "prop-types"
import * as S from "./style"

/**
 * FlashDisplay
 */

export const FlashDisplay = () => {
  const [alerts, setAlerts] = useState(gon.flash)
  function dismissAlert(index) {
    const new_alerts = [...alerts.slice(0, index), ...alerts.slice(index + 1)]
    setAlerts(new_alerts)
  }
  return (
    <S.FlashDisplayHeader>
      <S.FlashDisplayList>
        {alerts.map((alert, index) => (
          <S.FlashDisplayItem key={index} alertType={alert.level}>
            <S.FlashDisplayItemDismissButton
              onClick={() => dismissAlert(index)}
            >
              &times;
            </S.FlashDisplayItemDismissButton>
            <span>{alert.message}</span>
          </S.FlashDisplayItem>
        ))}
      </S.FlashDisplayList>
    </S.FlashDisplayHeader>
  )
}

FlashDisplay.propTypes = {}
FlashDisplay.defaultProps = {}
export default FlashDisplay
