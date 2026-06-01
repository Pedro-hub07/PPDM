import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function RegisterScreen({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function cadastrar() {

    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    Alert.alert('Sucesso', 'Cadastro realizado!');

    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🎵 WaveMusic</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
      >
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>
          Voltar para Login
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
    padding: 30,
  },

  logo: {
    fontSize: 32,
    color: '#1DB954',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#222',
    color: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  botao: {
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
    textAlign: 'center',
    marginTop: 20,
  },
});