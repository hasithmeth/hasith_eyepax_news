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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5 19a.5.5 0 0 0 .5-.5V9.378a.5.5 0 0 0-.164-.37l-5.5-5a.5.5 0 0 0-.672 0l-5.5 5a.5.5 0 0 0-.164.37V18.5a.5.5 0 0 0 .5.5h11Zm1.5 2H5a1 1 0 0 1-1-1v-8.5a.5.5 0 0 0-.5-.5H2.293a.5.5 0 0 1-.336-.87l9.37-8.518a1 1 0 0 1 1.346 0l9.37 8.518a.5.5 0 0 1-.336.87H20.5a.5.5 0 0 0-.5.5V20a1 1 0 0 1-1 1Z"
      fill="#A6A6A6"
    />
    <Path
      d="M8 14.5c0-.276.225-.504.498-.458a3 3 0 0 1 2.46 2.46c.046.273-.182.498-.458.498h-2a.5.5 0 0 1-.5-.5v-2ZM8 10.5c0-.276.224-.502.5-.482a7 7 0 0 1 6.482 6.482c.02.276-.206.5-.482.5h-1a.542.542 0 0 1-.525-.5 5 5 0 0 0-4.476-4.475A.542.542 0 0 1 8 11.5v-1Z"
      fill="#A6A6A6"
    />
  </Svg>
);

export default SvgComponent;
