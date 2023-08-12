import React from "react";

const Component1 = () => {
  return (
    <div className="full-screen c1">
      <video className="video" autoPlay loop muted>
        <source src="/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Component1;
