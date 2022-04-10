import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20Zm-4.975-7.5c-.028-.276.199-.5.475-.5h1c.276 0 .496.225.542.498a3 3 0 0 0 5.916 0c.046-.273.266-.498.542-.498h1c.276 0 .503.224.475.5a5 5 0 0 1-9.95 0Z"
      fill="#A6A6A6"
    />
  </Svg>
);

export default SvgComponent;
