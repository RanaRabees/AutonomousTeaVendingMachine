import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button , Alert } from "react-native";

const image = {
  uri: "https://images.unsplash.com/photo-1607273177127-47ec33b5be3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

export default function App() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.heading}>Mechatronics Projects!</Text>
        <Text style={styles.subheading}>Autonomous Tea            Vending Machine...</Text>

        <StatusBar style="auto" />
        <View style={styles.fixToText}>
          <Button
            title="One Cup"
            style={styles.button}
            onPress={() => Alert.alert("One Cup tea will be ready in 3 minutes")}
          />
          <Button
            title="Two Cup"
            style={styles.apnabutton}
            onPress={() => Alert.alert("Two Cup tea will be ready in 3 minutes")}
          />
        </View>
        <View style={styles.newfixToText}>
          <Button
            title="Three Cup"
            style={styles.button}
            onPress={() => Alert.alert("Three Cup tea will be ready in 6 minutes")}
          />
          <Button
            title="Four Cup"
            style={styles.apnabutton}
            onPress={() => Alert.alert("Four Cup tea will be ready in 8 minutes")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: "50%",
    marginRight: "25%",
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 50,
    marginTop: "25%",
    gap: 80,
  },

  newfixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 50,
    marginTop: "15%",
    gap: 80,
  },

  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "10%",
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    color: "#00ffe8",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  subheading: {
    marginTop: 80,
    fontSize: 30,
    color: "#ffffff",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
});
