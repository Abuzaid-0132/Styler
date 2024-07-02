import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default App;
