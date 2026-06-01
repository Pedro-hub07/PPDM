import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function PlayerScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.album}>
        <Text style={styles.albumIcon}>
          🎵
        </Text>
      </View>

      <Text style={styles.musicTitle}>
        Blinding Lights
      </Text>

      <Text style={styles.artist}>
        The Weeknd
      </Text>

      <Text style={styles.playing}>
        ▶ Tocando Agora
      </Text>

      <View style={styles.controls}>

        <TouchableOpacity>
          <Text style={styles.controlButton}>
            ⏮
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.controlButton}>
            ⏸
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.controlButton}>
            ⏭
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity>
        <Text style={styles.favorite}>
          ❤️ Favoritada
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
    padding: 20,
  },

  album: {
    width: 250,
    height: 250,
    backgroundColor: '#1DB954',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  albumIcon: {
    fontSize: 100,
  },

  musicTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
  },

  artist: {
    color: '#AAA',
    fontSize: 18,
    marginTop: 10,
  },

  playing: {
    color: '#1DB954',
    marginTop: 20,
    fontSize: 16,
  },

  controls: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 30,
  },

  controlButton: {
    fontSize: 40,
    color: '#FFF',
  },

  favorite: {
    color: '#1DB954',
    fontSize: 18,
    marginTop: 40,
    fontWeight: 'bold',
  },
});