import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import ReceiptGroupIcon from "./components/ReceiptCategory";
import {useState} from "react";

export default function App() {
  const [receiptCategoryList, setReceiptCategory] = useState<string[lla]>([{title: 'Health', isToggleDelete: false}]);
  const addReceiptCategory = () => {
    setReceiptCategory([...receiptCategoryList, {title: 'New Title', isToggleDelete: false}])
  };

  return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
              onPress={addReceiptCategory}
              style={styles.addButton}>
            <Ionicons name="add-circle-outline"
                      style={styles.trashIconStyle}
                      size={45}/>
            <Text>New Catrgory</Text>
          </TouchableOpacity>
          <Text style={styles.headerStyle}>Dashboard</Text>
          <Ionicons name="trash-outline"
                    style={styles.trashIconStyle}
                    size={35}/>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.categoryRow}>
            {receiptCategoryList.map((title, index) => (
                <ReceiptGroupIcon key={index} title={title}/>
            ))}
          </View>
        </ScrollView>
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
  categoryRow: {
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addButton: {
    alignSelf: 'center', // Align button horizontally in the center
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Add some padding at the bottom to prevent the button from sticking to the edge
  },
});

export class lla {
  title: string;
  isToggleDelete: boolean;
}