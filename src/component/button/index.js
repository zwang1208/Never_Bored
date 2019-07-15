import React from "react";

function Button({ onclick, children, className, style}) {

  return (
    <button style={style} onClick={onclick} className={className}>
      {children}
    </button>
  );
}

export default React.memo(Button)