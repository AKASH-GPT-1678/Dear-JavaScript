import React from "react";

const Greeting = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Hello, Welcome to React! 👋</h1>
      <p>This is a simple component example.</p>
    </div>
  );
};

export default React.memo(Greeting);
