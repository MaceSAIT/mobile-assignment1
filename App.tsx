import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Folders</Text>
      <StatusBar style="auto" />
      <View style={styles.greyBox}>
        <Text style={styles.textSearch}>Search</Text>
      </View>
      <View style={styles.whiteBox}/>
      <View style={styles.whiteBox}/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F2F8',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  whiteBox: {
    //flex: 0.5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  greyBox: {
    //flex: 0.5,
    backgroundColor: '#E4E3E9',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: 40,
    marginTop: 100,
  },
  textSearch: {
    fontWeight: 'regular',
    fontSize: 20,
    color: '#807F85',
    marginLeft: 20,
  }
});
