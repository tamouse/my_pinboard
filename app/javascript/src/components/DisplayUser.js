import React from "react"
import PropTypes from "prop-types"
import { Container } from "../styles"

export const DisplayUser = ({ user }) => (
  <Container>
    <h2>Current User: </h2>
    <pre>
      <code>{JSON.stringify(user, {}, 2)}</code>
    </pre>
  </Container>
)

DisplayUser.propTypes = {
  user: PropTypes.object,
}
DisplayUser.defaultProps = {
  user: {},
}
export default DisplayUser
