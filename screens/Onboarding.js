import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Welcome to <Text style={globalStyles.fontColor}>Task App</Text> for
        Santiago Arango
      </Text>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require("../assets/arrows.png")} />
        <View style={{ flex: 1 }}>
          <Text style={globalStyles.subTitle}>Manage Daily Tasks</Text>
          <Text style={styles.subHeadline}>
            <Text style={{ color: "#00f2a9" }}>Task App</Text> is a simple app
            that helps you to increase your productivity.
          </Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require("../assets/bell.png")} />
        <View style={{ flex: 1 }}>
          <Text style={styles.subTitle}>Notifications</Text>
          <Text style={styles.subHeadline}>
            Get notified when it's time to do you tasks.
          </Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require("../assets/design.png")} />
        <View style={{ flex: 1 }}>
          <Text style={styles.subTitle}>Minimal Design</Text>
          <Text style={styles.subHeadline}>
            Enjoy a simple design that allows you to focus only on what you have
            to do.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={globalStyles.button}
      >
        <Text style={[globalStyles.subTitle, { color: "#000" }]}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeadline: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    color: "#828282",
  },
  featureContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: 20,
    resizeMode: "contain",
  },
});
