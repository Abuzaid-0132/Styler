import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headertext}>
            What's is in React Native New Architecture
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://www.appstudio.ca/blog/wp-content/uploads/2023/08/How-Much-Does-It-Cost-to-Build-An-App-Like-Threads_-A-Comprehensive-Guide-3-1.jpg",
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            The New Architecture replaced the Bridge with the JavaScript
            Interface (JSI). JSI enables bidirectional referencing between
            JavaScript and C++ objects, allowing direct method invocation. This
            means a C++ object can request a JavaScript object to execute a
            method, and vice versa, fostering seamless communication between the
            two worlds.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://upendrasahni.hashnode.dev/react-native-new-architecture"
              )
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://hashnode.com/@Abuzaid0132")}
          >
            <Text style={styles.socialLinks}>Follow Me!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
  },
  card: {
    width: 410,
    height: "auto",
    borderRadius: 6,
    marginVertical: 12,
    paddingHorizontal: 13,
  },
  elevatedCard: {
    backgroundColor: "lightblue",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headertext: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 330,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  socialLinks: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
});
