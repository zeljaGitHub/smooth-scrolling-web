import React, { useState, useEffect } from "react";

const Component1 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.querySelector(".video");

    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    videoElement.addEventListener("loadeddata", handleVideoLoad);

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoad);
    };
  }, []);

  return (
    <div className="full-screen c1">
      {!videoLoaded && <div className="loading">Loading Video...</div>}
      <video className="video" autoPlay loop muted>
        <source src="/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Component1;
