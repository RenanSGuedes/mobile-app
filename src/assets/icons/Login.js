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
        <Path d="M88.281 58.594a.781.781 0 00.781-.782V42.188a.782.782 0 00-.78-.782H67.186V10.938a.782.782 0 00-.78-.782h-24.22V.781A.78.78 0 0041.133 0L11.445 10.156a.781.781 0 00-.508.781c0 83.266-.296 78.594.54 78.907C43.233 100.687 41.203 100 41.407 100a.78.78 0 00.78-.781v-9.375h46.094a.781.781 0 100-1.563H67.187V58.594h21.094zM87.5 57.03H57.03a.781.781 0 00-.781.782v5.89L42.53 50 56.25 36.297v5.89a.78.78 0 00.781.782H87.5V57.03zM42.187 16.406h17.97v25h-2.345v-7.031a.78.78 0 00-1.359-.563L42.187 48.078V16.406zm23.438-4.687v29.687h-3.906V15.625a.782.782 0 00-.782-.781h-18.75v-3.125h23.438zm-25 86.383L12.5 88.492V11.508l28.125-9.61v96.204zm1.562-46.18C57.75 67.477 56.555 66.406 57.031 66.406a.781.781 0 00.781-.781v-7.031h2.344V88.28H42.187v-36.36zm23.438 36.36h-3.906V58.593h3.906V88.28z" />
        <Path d="M34.375 47.656v4.688a.781.781 0 101.563 0v-4.688a.781.781 0 10-1.563 0z" />
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
