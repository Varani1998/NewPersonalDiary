import React from "react";

const User = (props) => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
  </tr>
);

export default User;
