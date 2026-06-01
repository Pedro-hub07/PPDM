import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🎵 WaveMusic</Text>

      <Text style={styles.subtitulo}>
        Sua música em qualquer lugar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.link}>
          Criar Conta
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 10,
  },

  subtitulo: {
    color: '#FFF',
    marginBottom: 40,
    fontSize: 16,
  },

  input: {
    width: '100%',
    backgroundColor: '#222',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  botao: {
    width: '100%',
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  link: {
    color: '#1DB954',
    marginTop: 20,
    fontSize: 16,
  },
});