import React from "react";

function Button() {
  return (
    <button className="dark-mode">
      <h3>Dark Mode</h3>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </button>
  );
}

export default Button;
