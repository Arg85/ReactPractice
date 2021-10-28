import React, { useRef, useEffect } from "react";

function RefsTuto() {
  const FocusRef = useRef();
  useEffect(() => {
    console.log("rendet tita");
    FocusRef.current.focus();
  });
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input ref={FocusRef} type="text"></input>
    </div>
  );
}

export default RefsTuto;
