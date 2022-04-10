import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={14}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.056 12.941c-.582.824-1.308 1.236-2.18 1.236-.873 0-1.6-.412-2.181-1.236m6.616-1.235H2.44c-.255 0-.505-.064-.725-.185a1.4 1.4 0 0 1-.528-.505 1.3 1.3 0 0 1 .019-1.369 8.306 8.306 0 0 0 1.308-4.46v-.893c0-.874.368-1.711 1.022-2.33A3.597 3.597 0 0 1 6.003 1h1.745c.925 0 1.813.347 2.467.965a3.203 3.203 0 0 1 1.022 2.33v.893a8.3 8.3 0 0 0 1.308 4.46c.132.205.203.44.206.681a1.3 1.3 0 0 1-.187.687c-.125.21-.307.384-.527.505-.22.121-.471.185-.726.185v0Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
