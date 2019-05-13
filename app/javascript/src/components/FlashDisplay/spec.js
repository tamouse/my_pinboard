import React from "react"
import { shallow } from "enzyme"

// requires code under test to be directly exported
import { DeviseAlert } from "./index"
// if code under test is exported as a default use
// import DeviseAlert from "./index"

describe.skip("DeviseAlert", () => {
  it("renders the DeviseAlert component", () => {
    const actual = shallow(<DeviseAlert/>) // don't forget to add required props
    expect(actual).toMatchSnapshot()
  })
})
