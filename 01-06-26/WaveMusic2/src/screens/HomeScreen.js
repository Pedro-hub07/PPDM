import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import musics from '../data/musics';

export default function HomeScreen({ navigation }) {

  function renderMusic({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Player')}
      >
        <Text style={styles.title}>
          🎵 {item.title}
        </Text>

        <Text style={styles.artist}>
          {item.artist}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        WaveMusic
      </Text>

      <Text style={styles.subtitle}>
        Suas músicas favoritas
      </Text>

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => navigation.navigate('Favoritos')}
      >
        <Text style={styles.favoriteText}>
          ❤️ Ver Favoritos
        </Text>
      </TouchableOpacity>

      <FlatList
        data={musics}
        renderItem={renderMusic}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  logo: {
    color: '#1DB954',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 20,
  },

  favoriteButton: {
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  favoriteText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artist: {
    color: '#AAA',
    marginTop: 5,
  },
});