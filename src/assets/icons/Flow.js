import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={51}
      height={45}
      viewBox="0 0 51 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.209 15.299h20.79a7.15 7.15 0 10-7.148-7.062M1.209 30.03h33.495a7.134 7.134 0 11-7.088 6.602"
        stroke="#47566A"
        strokeWidth={1.025}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 22.387h42.219a7.088 7.088 0 10-6.986-7.714"
        stroke="#47566A"
        strokeWidth={1.025}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
