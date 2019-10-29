import React from "react";

export default props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Name</label>
      <input
        name="name"
        value={props.values.name}
        onChange={props.onChange}
      />
      <label>Password</label>
      <input
        name="password"
        value={props.values.password}
        type="password"
        onChange={props.onChange}
      />
      <input type="submit" />
    </form>
  );
};