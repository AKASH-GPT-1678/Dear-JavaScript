import React from "react";
import Children from "./Children";

const Parent = () => {
  const ref = React.useRef(null);
  const handleClick = () => {
    // 👇 USING function declared inside useImperativeHandle
    ref.current.onInit();
    ref.current.sayHello("Akash");
  };

  return (
    <div>
      <h1>Hello iam children brother</h1>
      <Children ref={ref} />
      <button onClick={handleClick}>Click Me to call function</button>
    </div>
  );
};

export default Parent;
