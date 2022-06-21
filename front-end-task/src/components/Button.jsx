import React from "react";

function Button({ text, type, onClick, className }) {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
