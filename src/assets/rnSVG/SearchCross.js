import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 13 7 7m0 0L1 1m6 6 6-6M7 7l-6 6"
      stroke="#202663"
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgComponent;
