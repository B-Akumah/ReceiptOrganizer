// HomePage.js
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import ReceiptCategory from "../components/ReceiptCategory";

let isDeletable = false;
const CategoriesPage = () => {
  const [receiptCategoryList, setReceiptCategory] = useState<string[lla]>([{
    title: 'Health',
    isToggleDelete: isDeletable
  }]);
  const addReceiptCategory = () => {
    setReceiptCategory([...receiptCategoryList, {title: 'New Title', isToggleDelete: isDeletable}])
  };
  const toggleCategoryDeletionButton = () => {
    isDeletable = !isDeletable
    for (const receiptCategory: lla of receiptCategoryList) {
      receiptCategory.isToggleDelete = isDeletable
    }
    setReceiptCategory([...receiptCategoryList])
  };

  return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
              onPress={addReceiptCategory}
              style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={45}/>
            <Text>Add Category</Text>
          </TouchableOpacity>
          <Text style={styles.headerStyle}>Categories</Text>
          <TouchableOpacity
              onPress={toggleCategoryDeletionButton}
              styles={styles.trashIcon}>
            {isDeletable ?
                (<Text style={styles.trashDone}>Done</Text>)
                : (<Ionicons name="trash-outline" size={35}/>)
            }

          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.categoryRow}>
            {receiptCategoryList.map((title, index) => (
                <ReceiptCategory key={index} title={title}/>
            ))}
          </View>
        </ScrollView>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    paddingTop:20,
  },
  headerStyle: {
    paddingLeft: 45,
    color: '#000',
    fontSize: 25,
    alignSelf: "center",
    flex: 1, // Expand to fill available space
  },
  trashIcon: {
    color: '#000',
  },
  trashDone : {
    color: '#ff0000',
    fontSize: 20,
    fontWeight: "bold"
  },
  headerRow: {
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
    alignItems: 'center', // Align items vertically in the center
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
export default CategoriesPage;


