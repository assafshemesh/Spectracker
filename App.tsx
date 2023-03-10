import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import TherapistScreen from './screens/TherapistScreen';
// import TherapistGoalsScreen from './screens/TherapistGoalsScreen';
import SessionScreen from './screens/SessionScreen';
import { SessionProvider } from './contexts/SessionState';


const Stack = createStackNavigator();

const App = () => {
  
  return (
    // <SessionProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: '',
            headerStyle: {
              // backgroundColor: 'darkslateblue',
              backgroundColor: '#fff',
            },
            // headerTintColor: '#fff',
            headerTintColor: 'darkslateblue',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 18,
              fontFamily: 'sans-serif-light',
            },
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Therapist Home" component={TherapistScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Therapist Goals" component={TherapistGoalsScreen} /> */}
          <Stack.Screen name="Session" component={SessionScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>

      </NavigationContainer>
    // </SessionProvider>
  );
};

export default App;