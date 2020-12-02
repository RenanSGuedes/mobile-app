import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={35}
      height={54}
      viewBox="0 0 35 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.958 15.423L17.653 1 32.01 27.91a16.654 16.654 0 11-28.714 0l3.574-6.7M8.787 17.617l-.79 1.48M12.475 44.329l9.829-16.773"
        stroke="#47566A"
        strokeWidth={1.03}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.09 30.593a3.337 3.337 0 10-6.674 0 3.337 3.337 0 006.674 0zM26.573 41.383a3.337 3.337 0 10-6.674 0 3.337 3.337 0 006.674 0z"
        stroke="#47566A"
        strokeWidth={1.03}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
