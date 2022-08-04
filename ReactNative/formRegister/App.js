import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");
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
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Tap your password here"
        value={password}
        onChangeText={setPassword}
      />
      <InputWithLabel
        label="Name"
        placeholder="Tap your pet's name here"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label="Date of birth"
        placeholder="Tap your pet's birthday here"
        value={dob}
        onChangeText={setDob}
      />
      <InputWithLabel
        label="Breed"
        placeholder="Tap your pet's breed here"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label="Favorite Toy"
        placeholder="Tap your pet's favorite toy here"
        value={toy}
        onChangeText={setToy}
      />
    </View>
  );
}

function InputWithLabel(props) {
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
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
