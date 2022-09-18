import {Text, StyleSheet} from 'react-native';
import {Button, Stack, TextInput} from '@react-native-material/core';
import {useEffect} from 'react';

const Login = props => {
  useEffect(() => {
    //== check if user has logged in
    console.log('is Logged isn');
  }, []);

  return (
    <Stack spacing={2} style={styles.login} testID="app-root" accessibilityLabel="app-root">
      <Text style={styles.title}>eGradeBook+</Text>
      <TextInput
        id="username"
        label="Username"
        accessibilityLabel="username"
        // leading={(props) => <AntDesign name="user" size={24} color="black" />}
      />
      <TextInput
        id="password"
        label="Password"
        secureTextEntry={true}
        accessibilityLabel="password"
        // leading={(props) => <Icon name="lock" {...props} />}
      />
      <Button
        title="Sign In"
        id="sign_in_button"
        variant="contained"
        compact={true}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  login: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    height: '80%',
  },
});
export default Login;
