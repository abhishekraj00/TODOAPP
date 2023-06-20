import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MyButton from '../components/MyButton';
import {Alert} from 'react-native';
import {userContext} from '../context/UserContext';

const Register = () => {
  const {navigate}: any = useNavigation();
  const {setUser} = useContext(userContext);

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    if (!userData.userName) {
      Alert.alert('Error', 'Pls fill the Username.', [{text: 'retry'}]);
      return;
    }
    if (!userData.email) {
      Alert.alert('Error', 'Pls fill the email.', [{text: 'retry'}]);
      return;
    }
    if (!userData.email.includes('@')) {
      Alert.alert('Error', 'Not a valid email.', [{text: 'retry'}]);
      return;
    }
    if (!userData.password) {
      Alert.alert('Error', 'Pls fill the Password.', [{text: 'retry'}]);
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      Alert.alert('Error', 'Password not matched', [{text: 'retry'}]);
      return;
    }
    setUser(userData?.userName);
    navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name..."
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={text =>
            setUserData(user => ({...user, userName: text}))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email..."
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => setUserData(user => ({...user, email: text}))}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password..."
          secureTextEntry={true}
          onChangeText={text =>
            setUserData(user => ({...user, password: text}))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter  Confirm Password..."
          secureTextEntry={true}
          onChangeText={text =>
            setUserData(user => ({...user, confirmPassword: text}))
          }
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <MyButton
          width={100}
          onPress={handleRegister}
          title="Register"
          btnColor="#f4511e"
        />
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.text}>
          Have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigate('Login')}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  linkContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#888',
  },
  linkText: {
    color: '#f4511e',
    fontSize: 18,
  },
});
