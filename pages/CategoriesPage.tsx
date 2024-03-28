// HomePage.js
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import CategoryItem from "../components/CategoryItem";
import {Space} from "./SpacesPage";

let isDeletable = false;

function CategoriesPage() {
  const [receiptCategoryList, setReceiptCategoryList] = useState<string[Category]>([{
    index: 0,
    title: 'Health',
    isToggleDelete: isDeletable
  }]);
  const addReceiptCategory = () => {
    isDeletable = false;
    for (const Spaces: Space of receiptCategoryList) {
      Spaces.isToggleDelete = isDeletable
    }
    setReceiptCategoryList([...receiptCategoryList, {
      index: receiptCategoryList.length,
      title: 'New Title',
      isToggleDelete: isDeletable
    }])
  };
  const toggleCategoryDeletionButton = () => {
    isDeletable = !isDeletable
    for (const receiptCategory: Category of receiptCategoryList) {
      receiptCategory.isToggleDelete = isDeletable
    }
    setReceiptCategoryList([...receiptCategoryList])
  };

  const handleDeleteCategory = (spaceToDelete: Space) => {
    let filteredList = receiptCategoryList.filter((item: Space) => item.index !== spaceToDelete.index);
    if (filteredList.length == 0) {
      isDeletable = false;
    }
    setReceiptCategoryList(receiptCategoryList.filter((item: Space) => item.index !== spaceToDelete.index))
  }
  return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
              onPress={addReceiptCategory}
              style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={45}/>
            <Text>Add Category</Text>
          </TouchableOpacity>
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
            {receiptCategoryList.map((data, index) => (
                <CategoryItem key={index} categoryData={data} onDelete={handleDeleteCategory}/>
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
    justifyContent: 'center',
    paddingTop: 20,
  },
  trashIcon: {
    color: '#000',
  },
  trashDone: {
    color: '#ff0000',
    fontSize: 20,
    fontWeight: "bold"
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    justifyContent: "space-between",
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

export class Category {
  index: number;
  title: string;
  isToggleDelete: boolean;
}

export default CategoriesPage;


