import React from "react"
import T from "prop-types"
import * as S from "./style"

/**
 * SignOut
 */
export const SignOut = ({ is_user_signed_in }) => {
  if (!is_user_signed_in) {
    return null
  }

  return (
    <form action="/users/sign_out">
      <S.SignoutBlock>
        <S.SignoutButton type="submit">sign out</S.SignoutButton>
      </S.SignoutBlock>
    </form>
  )
}
SignOut.propTypes = {
  is_user_signed_in: T.bool,
}
SignOut.defaultProps = {
  is_user_signed_in: false,
}
export default SignOut
