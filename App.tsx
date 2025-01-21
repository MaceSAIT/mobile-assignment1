import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Folders</Text>
      <StatusBar style="auto" />
      <View style={styles.greyBox}/>
      <View style={styles.whiteBox}/>
      <View style={styles.whiteBox}/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  whiteBox: {
    //flex: 0.5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  greyBox: {
    //flex: 0.5,
    backgroundColor: '#E4E3E9',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 50,
  }
});
