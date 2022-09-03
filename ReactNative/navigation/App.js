import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function SignUpForm() {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up Screen</Text>
    </View>
  );
}

function SignInForm() {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInForm}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpForm}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
