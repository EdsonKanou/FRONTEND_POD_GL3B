import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './app/screens/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';


axios.defaults.baseURL="http://192.168.43.14:5000";



export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
          <MainNavigation />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
