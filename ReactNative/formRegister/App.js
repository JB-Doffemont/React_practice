import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <InputWithLabel
        label="Email"
        placeholder="Tap your Email here"
        value=""
        onChangeText={() => {}}
      />
    </View>
  );
}

export const InputWithLabel = (props) => {
  const { label, placeholder, value, onChangeText } = props;
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
