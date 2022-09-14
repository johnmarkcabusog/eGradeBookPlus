import { Text, StyleSheet } from "react-native";
import { Button, Stack, TextInput } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect } from "react";

const Login = (props) => {
    console.log("propss", props)
  useEffect(() => {
    //== check if user has logged in
    console.log("is Logged in");
  }, []);

  return (
      <Stack spacing={2} style={styles.login}>
        <Text style={styles.title}>eGradeBook+</Text>
        <TextInput
          label="Username"
          // leading={(props) => <Icon name="account" {...props} />}
        />
        <TextInput
          label="Password"
          secureTextEntry={true}
          // leading={(props) => <Icon name="lock" {...props} />}
        />
        <Button
          title="Sign In"
          variant="contained"
          compact={true}
          onPress={() => {
            props.navigation.navigate('Home')
          }}
        />
      </Stack>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    color:"black"
  },
  login:{
    display:'flex',
    justifyContent:"center",
    margin:20,
    height:"80%"
  }
});
export default Login;
