import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './screens/HomeScreen';
import { CaveScreen } from './screens/CaveScreen';
import { SettingScreen } from './screens/SettingScreen';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';

// GoogleSignin.configure({
//   webClientId:
//     '215431561769-iqne2sgalm95giqtcg2v0adhql8hign2.apps.googleusercontent.com',
// });
const Tab = createBottomTabNavigator();
const App = () => {
  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     // this.setState({ userInfo });
  //     console.log(userInfo);
  //   } catch (error) {
  //     console.log(error);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  return (
    <NavigationContainer>
      {/*<Button*/}
      {/*  onPress={signIn}*/}
      {/*  title="Learn More"*/}
      {/*  color="#841584"*/}
      {/*  accessibilityLabel="Learn more about this purple button"*/}
      {/*/>*/}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Cave') {
              iconName = 'ios-bonfire-outline';
            } else if (route.name === 'Setting') {
              iconName = 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cave" component={CaveScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
