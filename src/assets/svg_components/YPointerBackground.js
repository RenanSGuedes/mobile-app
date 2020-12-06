import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={348} height={348} viewBox="0 0 348 348" fill="none" {...props}>
      <Circle cx={174} cy={174} r={174} fill="#F0F0F0" />
      <Circle cx={174} cy={174} r={173.5} stroke="#000" strokeOpacity={0.25} />
      <Circle cx={174} cy={174} r={151} fill="#DAEBFF" fillOpacity={0.65} />
      <Path
        d="M313.506 116.215c7.588 18.32-7.588-18.32 0 0a150.986 150.986 0 00-81.721-81.72A150.996 150.996 0 0067.227 67.226a150.998 150.998 0 00-32.733 48.988c7.589-18.32-7.588 18.32 0 0h279.012z"
        fill="#F0F0F0"
      />
    </Svg>
  )
}

export default SvgComponent
