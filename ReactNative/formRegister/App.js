import { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");

  function matchPassword(props) {
    const {
      nativeEvent: { text },
    } = props;
    if (text !== password) {
      alert("Passwords do not match, please try again.");
    }
  }

  return (
    <View style={styles.inputsView}>
      <ScrollView>
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
          secureTextEntry
        />
        <InputWithLabel
          label="Confirm Password"
          placeholder="Re-tap your password here"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onSubmitEditing={matchPassword}
          secureTextEntry
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
      </ScrollView>
    </View>
  );
}

function InputWithLabel(props) {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputsView: {
    padding: 18,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    padding: 8,
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
