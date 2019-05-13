// See https://storybook.js.org/basics/writing-stories/ for more info
import React from "react"
import T from "prop-types"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Panel } from "react-bootstrap"

import { DeviseAlert } from "./index"

storiesOf("DeviseAlert", module)
  .add('example', () => {
    // Define properties, callbacks, etc., then invoke the Consumer
    const props = {}
    return (
      <DeviseAlert {...props} />
    )
  })
