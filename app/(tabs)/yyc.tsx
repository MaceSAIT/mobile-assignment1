import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { ExpoRouter } from "expo-router";
import { Link } from 'expo-router';
import { Image } from 'expo-image';

//export default ExpoRouter;

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.textHeader}>Calgary</Text>

      <Link style={styles.linkText} href='https://www.calgary.ca/home.html'>City Page</Link>

      <Image source={require('calgary')}></Image>

      <StatusBar style="auto" />



      <View style={styles.whiteBox}>
        <Link href="/notes" style={styles.iconTextWrapper}>
          <View style={styles.iconTextWrapper}>
            <AntDesign name='filetext1' size={24} color='#E4AF0B'/>
            <Text style={styles.textButtons}>Notes App Lab</Text>
          </View>
        </Link>
        <View style={styles.whiteBoxLine}/>
        <Link href="/lab_3" style={styles.iconTextWrapper}>
          <View style={styles.iconTextWrapper}>
            <AntDesign name='user' size={24} color='#E4AF0B'/>
            <Text style={styles.textButtons}>Lab 3</Text>
          </View>
        </Link>
      </View>


      <Text style={styles.textSubHeader}>iCloud</Text>


      <View style={styles.whiteBox}>
        
        <View style={styles.iconTextWrapper}>
          <AntDesign name='folder1' size={24} color='#E4AF0B'/>
          
          <Text style={styles.textButtons}>N/A</Text>


        </View>

        <View style={styles.whiteBoxLine}/>

        <View style={styles.iconTextWrapper}>
          <AntDesign name='delete' size={24} color='#E4AF0B'/>

          <Text style={styles.textButtons}>N/A</Text>

        </View>

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
  textHeader: { // Style for the title header
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginLeft: 40,
    marginTop: 100,
  },
  textSubHeader: { // Style for the "iCloud" sub header
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  textButtons: { // Style for button text
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },
  linkText: { // Style for link text
    fontWeight: 'regular',
    fontSize: 20,
    color: '#E4AF0B',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    alignSelf: 'flex-start',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  }
  // Orange icons are #E4AF0B
  // White box lines are #C6C5CA
});
