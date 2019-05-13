import React, { forwardRef, useState, useEffect, createRef } from "react"
import T from "prop-types"
import styled from "styled-components"

const HorizontalFieldInput = forwardRef((props, ref) => {
  const {
    fieldLabel,
    fieldName,
    fieldValue,
    fieldType,
    ...controlProps
  } = props
  return (
    <HorizontalContainer>
      <HorizontalLabelArea>
        <label htmlFor={fieldName}>{fieldLabel}</label>
      </HorizontalLabelArea>
      <HorizontalInputControl
        type={fieldType}
        value={fieldValue}
        id={fieldName
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}
        name={fieldName}
        ref={ref}
        {...controlProps}
      />
    </HorizontalContainer>
  )
})
HorizontalFieldInput.propTypes = {
  fieldLabel: T.string.isRequired,
  fieldName: T.string.isRequired,
  fieldType: T.oneOf(["text", "password", "hidden"]),
  fieldValue: T.string,
}
HorizontalFieldInput.defaultProps = {
  fieldType: "text",
  fieldValue: "",
}
export default HorizontalFieldInput

const HorizontalContainer = styled.div`
  diplay: flex;
  flex-direction: row;
  align-items: center;
  justify-content: spread-between;
`
const HorizontalLabelArea = styled.div`
  flex: 1;
`

const HorizontalInputControl = styled.input`
  flex: 4;
  width: 100%;
  padding: 3px;
  font-size: 1em;
`
