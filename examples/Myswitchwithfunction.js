import React, { useState } from "react";
import offbulb from "./offbulb.jpg";
import onbulb from "./onbulb.jpg";
const Myswitchwithfunction = () => {
  const [src, newSrc] = useState(true);
  const handleClick = () => {
    newSrc(!src);
  };
  return (
    <React.Fragment>
      <img
        src={src ? onbulb : offbulb}
        alt="423423"
        height="200px"
        width="100px"
        onClick={handleClick}
      />
      <h1>{`Click to ${src ? "off" : "on"} bulb`}</h1>
    </React.Fragment>
  );
};
export default Myswitchwithfunction;
