import React from "react";
import { forwardRef } from "react";

const Children = forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({
    onInit() {
      console.log("onInit called inside Child");
    },
    sayHello(name) {
      console.log(`Hello ${name}, from Child`);
    },
  }));
  return (
    <div >
      <h1>Hello I am children</h1>
    </div>
  );
});

export default Children;
