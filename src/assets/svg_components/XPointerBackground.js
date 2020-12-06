import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={348} height={348} viewBox="0 0 348 348" fill="none" {...props}>
      <Rect width={348} height={348} rx={174} fill="#F0F0F0" />
      <Rect
        x={0.5}
        y={0.5}
        width={347}
        height={347}
        rx={173.5}
        stroke="#000"
        strokeOpacity={0.25}
      />
      <Path
        d="M280.773 280.773a151.004 151.004 0 0032.733-164.558 151 151 0 10-246.28 164.558L174 174l106.773 106.773z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={16.5}
          y1={174}
          x2={325}
          y2={174}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C4C4C4" />
          <Stop offset={0.786458} stopColor="#DAEBFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
