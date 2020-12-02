import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={62}
      viewBox="0 0 17 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1h15M1 61.4h15M8.5 61.4V1M4.75 53.85h7.5M1 46.3h15M4.75 38.75h7.5M1 31.2h15M4.75 23.65h7.5M4.75 8.55h7.5M1 16.1h15"
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
