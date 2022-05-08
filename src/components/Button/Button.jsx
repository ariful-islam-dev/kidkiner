import React from "react";

const Button = ({ link, children, bg }) => {
  return (
    <a href={link} className="btn-master" style={{ backgroundColor: bg }}>
      {children}
    </a>
  );
};

export default Button;
