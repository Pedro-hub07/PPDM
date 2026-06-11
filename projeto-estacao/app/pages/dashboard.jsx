import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { LineChart, PieChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

export default function Dashboard() {

  const dadosGraficoLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        data: [20, 30, 45, 67, 77, 99],
        color: (opacity = 1) => `rgba(26, 71, 251, ${opacity})`, // ✅ deve ser função
        strokeWidth: 2,
      },
    ],
    legend: ['Medições'],
  }

  // ✅ Um único array com os 3 bairros
  const dadosGraficoPizza = [
    {
      name: 'Jardim Sampaio',
      temp: 23,
      color: '#84daef',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Santa Rosa',
      temp: 30,
      color: '#ff0000',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Centro',
      temp: 47,
      color: '#51ff00',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
  ]

  const chartConfig = {
    backgroundGradientFrom: '#1a47fb',
    backgroundGradientTo: '#4a6ff5',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: '#ffffff',
    },
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Dashboard</Text>

      {/* Gráfico de Linha */}
      <Text style={styles.subtitulo}>Medições por Mês</Text>
      <LineChart
        data={dadosGraficoLinha}
        width={screenWidth - 32} // desconta padding lateral
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.grafico}
        yAxisSuffix="°C"
        fromZero
      />

      {/* Gráfico de Pizza */}
      <Text style={styles.subtitulo}>Temperatura por Bairro</Text>
      <PieChart
        data={dadosGraficoPizza}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        accessor="temp"           // ✅ campo numérico do array
        backgroundColor="transparent"
        paddingLeft="15"
        style={styles.grafico}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1aa5fb',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 20,
    marginBottom: 8,
  },
  grafico: {
    borderRadius: 16,
  },
})