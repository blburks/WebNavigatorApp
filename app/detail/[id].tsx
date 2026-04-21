import { useLocalSearchParams } from "expo-router";
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();

  if (!id) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Invalid Link</Text>
        <Text style={styles.id}>No item ID was provided.</Text>
      </View>
    );
  }

  const openMaps = () => {
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  const openWebPage = () => {
    const url = `https://en.wikipedia.org/wiki/Item_${id}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Text style={styles.id}>Viewing item: {id}</Text>

      <TouchableOpacity style={styles.button} onPress={openMaps}>
        <Text style={styles.buttonText}>Open in Maps</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecond} onPress={openWebPage}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  id: {
    fontSize: 18,
    marginTop: 10
  },
  button: {
    marginTop: 30,
    backgroundColor: "#0a7ea4",
    padding: 15,
    borderRadius: 8
  },
  buttonSecond: {
    marginTop: 15,
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
