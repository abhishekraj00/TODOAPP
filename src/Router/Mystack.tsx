import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyButton from '../components/MyButton';
import {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {userContext} from '../context/UserContext';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const {user, setUSer}: any = useContext(userContext);

  const {navigate}: any = useNavigation();
  const [currentUser, setCurentUser] = useState('User 1');
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: user,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <MyButton
              onPress={() => navigate('Login')}
              title="Log Out"
              btnColor="#f4511e"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
