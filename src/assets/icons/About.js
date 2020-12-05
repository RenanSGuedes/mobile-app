import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { vw } from 'react-native-expo-viewport-units'

function SvgComponent(props) {
  return (
    <Svg
      width={vw(15)}
      height={vw(15)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#47566A">
        <Path d="M26.563 55.469A23.437 23.437 0 1050 32.03 23.484 23.484 0 0026.562 55.47zm45.312 0a21.875 21.875 0 11-43.75 0 21.875 21.875 0 0143.75 0z" />
        <Path d="M50.781 47.656a.781.781 0 00-.781-.781h-1.563a.781.781 0 100 1.563h.782v17.187h-1.563a.781.781 0 100 1.563h4.688a.781.781 0 100-1.563H50.78V47.656zM48.438 44.14a1.187 1.187 0 002.343 0 1.187 1.187 0 00-2.343 0zm1.562 0a.406.406 0 01-.781 0 .405.405 0 01.781 0z" />
        <Path d="M99.57 49.93c.625-.305.446.039.446-11.649 0-.601 3.125 1.969-49.532-38.133-.78-.578 2.079-2.343-50.187 37.5-.445.336-.297-.21-.297 11.57a.781.781 0 001.281.633l9.657-7.359v46.57H.78a.781.781 0 00-.78.782v9.375a.781.781 0 00.78.78H99.22a.781.781 0 00.781-.78v-9.375a.78.78 0 00-.781-.782H89.063v-46.57c10.335 7.867 9.875 7.758 10.507 7.438zM1.563 38.68L50 1.78 98.438 38.68v8.93L50.484 11.085a.78.78 0 00-.968 0L1.563 47.609v-8.93zm96.875 59.757H1.563v-7.812h96.875v7.812zM87.5 89.062h-75v-47.78L50 12.718 87.5 41.28v47.781z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h100v100H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
