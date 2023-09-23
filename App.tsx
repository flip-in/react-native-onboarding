import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PointsListScreen from './src/screens/PointsListScreen';
import MapScreen from './src/screens/MapScreen';
import {queryClient, clientPersister} from './lib/clientPersister';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
// import {
//   // SafeAreaView,
//   // ScrollView,
//   // StatusBar,
//   // StyleSheet,
//   // Text,
//   // useColorScheme,
//   // View,
// } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister: clientPersister}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Points List">
          <Stack.Screen name="Points List" component={PointsListScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
}

export default App;
