import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import MyButton from '../components/MyButton';
import {useContext} from 'react';
import {userContext} from '../context/UserContext';

const Login = () => {
  const {navigate}: any = useNavigation();

  const {setUser} = useContext(userContext);

  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });

  const handleLogin = () => {
    if (!userData.userName) {
      Alert.alert('Error', 'Pls fill the Username.', [{text: 'retry'}]);
      return;
    }
    if (!userData.password) {
      Alert.alert('Error', 'Pls fill the Password.', [{text: 'retry'}]);
      return;
    }
    setUser(userData?.userName)
    navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter UserName..."
          autoCapitalize="none"
          onChangeText={text =>
            setUserData(user => ({...user, userName: text}))
          }
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
      <View style={{alignItems: 'center'}}>
        <MyButton
          onPress={handleLogin}
          title="Log In"
          btnColor="#f4511e"
          width={100}
        />
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.text}>
          Don't have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigate('Register')}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 200,
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
