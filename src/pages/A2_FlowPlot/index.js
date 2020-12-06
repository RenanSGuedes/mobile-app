import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { vw } from 'react-native-expo-viewport-units'

import {
  LineChart,
} from "react-native-chart-kit";

export default function A2_ListPlot() {
  const maxValue = 10

  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>

        <Text style={styles.titleMenu}>Substrato | Fechado</Text>
        
        <View>

          <LineChart
            data={{
              labels: ["18:30", "18:35", "19:00", "19:15", "19:30", "19:45", "20:00"],
              datasets: [
                {
                  data: [
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue
                  ]
                }
              ],
              legend: ['Vazão']
            }}
            width={vw(90)} // from react-native
            height={220}
            yAxisSuffix=" L/h"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#DAEBFF",
              backgroundGradientFrom: "#DAEBFF",
              backgroundGradientTo: "#DAEBFF",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(250, 168, 162, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(71, 86, 106, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "1",
                stroke: "#FF3501"
              },
              propsForBackgroundLines: {
                strokeWidth: .5,
                stroke: "rgba(255, 53, 1, .7)"
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>

        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View>
              <Text style={styles.normalText}>Gerar arquivo</Text>
              <Text style={styles.thinText}>Arquivos em pdf e xls (Dados obtidos num maior período)</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}