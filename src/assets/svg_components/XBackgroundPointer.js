import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={354}
      height={354}
      viewBox="0 0 354 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={177} cy={175} r={174} fill="#F0F0F0" />
      </G>
      <Path
        d="M284.773 281.773a151.004 151.004 0 0032.733-164.558 151 151 0 10-246.28 164.558L178 175l106.773 106.773z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={20.5}
          y1={175}
          x2={329}
          y2={175}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C4C4C4" />
          <Stop offset={0.786} stopColor="#DAEBFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
