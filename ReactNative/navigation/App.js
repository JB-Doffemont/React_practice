import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// Main screens
function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
function HomeScreen() {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home !</Text>
    </View>
  );
}
function FeedScreen() {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed !</Text>
    </View>
  );
}
function CatalogScreen() {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog !</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Account !</Text>
    </View>
  );
}
// Onboarding screens

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up Screen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

function SignInScreen({ navigation }) {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In Screen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name="Main" component={MainNavigator}></Stack.Screen>
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
