import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={27}
      height={53}
      viewBox="0 0 27 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.659 40.997a5.334 5.334 0 10-10.667 0 5.334 5.334 0 0010.667 0z"
        stroke="#47566A"
        strokeWidth={1.03}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
      <Path
        d="M19.833 4.86h6.04M19.833 15.518h6.039M19.833 26.176h6.039M19.833 10.188h3.827M19.833 20.847h3.827M12.325 35.663V13.995M12.325 10.945V7.896"
        stroke="#47566A"
        strokeWidth={1.03}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.747 28.373v2.266a11.324 11.324 0 109.052-.045V5.064a4.552 4.552 0 00-9.052 0v20.24"
        stroke="#47566A"
        strokeWidth={1.03}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
