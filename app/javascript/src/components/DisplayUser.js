import React from "react"
import PropTypes from "prop-types"

export const DisplayUser = ({ user }) => (
  <div>
    <span>User: </span>
    <pre>
      <code>{JSON.stringify(user, {}, 2)}</code>
    </pre>
  </div>
)

DisplayUser.propTypes = {
  user: PropTypes.object,
}
DisplayUser.defaultProps = {
  user: {},
}
export default DisplayUser
