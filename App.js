import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.headerStyle}>Dashboard</Text>
          <Ionicons name="trash-outline"
                    style={styles.trashIconStyle}
                    size={35}/>
        </View>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  headerStyle: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center', // Align text in the center horizontally
    flex: 1, // Expand to fill available space
  },
  trashIconStyle: {
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    width: '100%', // Ensures the row spans the entire width of the container
    paddingHorizontal: 20, // Adds some padding to the sides of the row
  },
});
