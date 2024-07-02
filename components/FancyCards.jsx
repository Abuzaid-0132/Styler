import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/111/677/283/5bd2fb15cd8d1-wallpaper-thumb.jpg",
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, India</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal, located in Agra, India, is an iconic symbol of love
            and one of the most famous architectural masterpieces in the world.
            Commissioned by the Mughal Emperor Shah Jahan in 1632 in memory of
            his beloved wife Mumtaz Mahal, the white marble mausoleum is
            renowned for its stunning beauty and intricate craftsmanship. The
            Taj Mahal features a large central dome, flanked by four smaller
            domes, and is adorned with exquisite inlay work of semi-precious
            stones and intricate calligraphy.
          </Text>
          <Text style={styles.cardFooter}>
            12 mins away from agra metro station.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  card: {
    width: 410,
    height: "auto",
    borderRadius: 6,
    marginVertical: 12,
    paddingHorizontal: 13,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 250,
    width: "100%",
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#242B2E",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#000000",
  },
});
