import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={244}
      height={246}
      viewBox="0 0 244 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={122} cy={120} r={120} fill="url(#prefix__paint0_radial)" />
      </G>
      <G filter="url(#prefix__filter1_i)">
        <Path
          d="M64 122c0 14.359-11.64 26-26 26s-26-11.641-26-26 11.64-26 26-26 26 11.641 26 26z"
          fill="url(#prefix__paint1_linear)"
        />
      </G>
      <Path
        stroke="#47566A"
        strokeWidth={5}
        strokeLinecap="round"
        d="M14.5 122.5h13.43"
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 1 121) scale(120)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.786} stopColor="#F7F7F7" />
          <Stop offset={1} stopColor="#E2E2E2" />
        </RadialGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={38.329}
          y1={96}
          x2={38.329}
          y2={148}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DEDEDE" />
          <Stop offset={1} stopColor="#DCDCDC" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
