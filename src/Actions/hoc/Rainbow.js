import React from "react";

const Rainbow = (wrapperComponent) => {
  const colours = ["red", "pink", "ornage", "blue", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + "-text";
  return (props) => (
    <div className={className}>
      <wrapperCompoenent {...props} />
    </div>
  );
};

export default Rainbow;
