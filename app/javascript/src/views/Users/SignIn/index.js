import React, { createRef, useRef, useEffect, useState } from "react"
import T from "prop-types"
import * as S from "./style"
import { Container, PageTitle, ButtonPrimary } from "../../../styles"
import { useFormFields } from "../../../hooks"
import { getCSRFToken } from "../../../lib"
import { HorizontalFieldInput } from "../../../components/Forms"

export const SignIn = props => {
  const { values, handleChange } = useFormFields()
  const usernameRef = useRef(null)
  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus()
    }
  }, []) // note that last empty array is magic.

  // NOTE: According to
  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  // normally you'd want to list the dependencies that might be
  // changing, HOWEVER, refs are different; I *really* only want to
  // run this hook but once.

  return (
    <Container>
      <PageTitle>Log in</PageTitle>
      <form action="/users/sign_in" method="post">
        <input name="utf8" type="hidden" value="✓" />
        <input type="hidden" name="authenticity_token" value={getCSRFToken()} />
        <HorizontalFieldInput
          fieldLabel="username"
          fieldName="user[username]"
          fieldValue={values["user[username]"]}
          autoComplete="username"
          onChange={handleChange}
          ref={usernameRef}
        />
        <HorizontalFieldInput
          fieldLabel="password"
          fieldName="user[password]"
          fieldValue={values["user[password]"]}
          fieldType="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <div>
          <label>
            <input
              type="checkbox"
              id="remember_me"
              name="user[remember_me]"
              value={values["user[remember_me]"]}
              onChange={handleChange}
            />{" "}
            Remember me
          </label>
        </div>
        <div>
          <ButtonPrimary type="submit">Log in</ButtonPrimary>
        </div>
      </form>
    </Container>
  )
}
SignIn.propTypes = {}
SignIn.defaultProps = {}
export default SignIn
