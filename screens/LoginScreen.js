import { StatusBar } from "expo-status-bar";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Image, Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            outline: "none",
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
          style={{
            outline: "none",
          }}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
      />
      <View style={{ height: 20 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});