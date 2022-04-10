import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14.351 12.644-2.53-2.497a5.821 5.821 0 0 0 1.397-3.779 5.83 5.83 0 0 0-1.744-4.152A5.988 5.988 0 0 0 7.27.5a5.988 5.988 0 0 0-4.203 1.716 5.83 5.83 0 0 0-1.744 4.152 5.83 5.83 0 0 0 1.744 4.153 5.988 5.988 0 0 0 4.203 1.716c1.41 0 2.77-.494 3.84-1.387l2.538 2.506.702-.712Z"
      stroke="#818181"
      strokeOpacity={0.8}
    />
  </Svg>
);

export default SvgComponent;
