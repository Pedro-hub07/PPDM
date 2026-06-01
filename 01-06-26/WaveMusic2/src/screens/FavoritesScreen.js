import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import musics from '../data/musics';

export default function FavoritesScreen() {

  const favorites = musics.filter(
    (music) => music.favorite === true
  );

  function renderFavorite({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>
          ❤️ {item.title}
        </Text>

        <Text style={styles.artist}>
          {item.artist}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        Favoritos
      </Text>

      <FlatList
        data={favorites}
        renderItem={renderFavorite}
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
    marginBottom: 20,
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