import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { ExpoRouter } from "expo-router";
import { Link } from 'expo-router';

//export default ExpoRouter;

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.iconText}>Edit</Text>

      <Text style={styles.textHeader}>Home</Text>

      <StatusBar style="auto" />

      <View style={styles.loginBox}>
        <Text style={styles.textLogin}>Username</Text>
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.textLogin}>Password</Text>
      </View>


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
  whiteBox: { // Style for white button boxes
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  whiteBoxLine: { // Style for white button lines
    backgroundColor: '#C6C5CA',
    borderWidth: 0,
    width: 300,
    height: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginBox: { // Style for grey search bar
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
  textHeader: { // Style for the "Folders" header
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginLeft: 40,
    marginTop: 10,
  },
  textSubHeader: { // Style for the "iCloud" sub header
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  textLogin: { // Style for search bar text
    fontWeight: 'regular',
    fontSize: 20,
    color: '#807F85',
    marginLeft: 20,
  },
  textButtons: { // Style for button text
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  }
  ,
  iconText: { // Style for button text
    fontWeight: 'regular',
    fontSize: 20,
    color: '#E4AF0B',
    marginTop: 40,
    marginRight: 30,
    alignSelf: 'flex-end',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  }
  // Orange icons are #E4AF0B
  // White box lines are #C6C5CA
});
