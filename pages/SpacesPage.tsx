import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
import SpacesItem from "../components/SpacesItem";

let isDeletable = false;

function SpacesPage() {
  const [SpacesList, setSpaces] = useState<string[Space]>([{
    index: 0,
    title: 'Home',
    isToggleDelete: isDeletable
  }]);
  const addSpaces = () => {
    isDeletable = false;
    for (const Spaces: Space of SpacesList) {
      Spaces.isToggleDelete = isDeletable
    }
    setSpaces([...SpacesList, {
      index: SpacesList.length,
      title: 'New Title',
      isToggleDelete: isDeletable
    }])
  };
  const toggleSpacesDeletionButton = () => {
    isDeletable = !isDeletable
    for (const Spaces: Space of SpacesList) {
      Spaces.isToggleDelete = isDeletable
    }
    setSpaces([...SpacesList])
  };

  const handleDeleteCategory = (spaceToDelete: Space) => {
    let filteredList = SpacesList.filter((item: Space) => item.index !== spaceToDelete.index);
    if (filteredList.length == 0) {
      isDeletable = false;
    }
    setSpaces(SpacesList.filter((item: Space) => item.index !== spaceToDelete.index))
  }

  return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
              onPress={addSpaces}
              style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={45}/>
            <Text>Add Spaces</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={toggleSpacesDeletionButton}
              styles={styles.trashIcon}>
            {isDeletable ?
                (<Text style={styles.trashDone}>Done</Text>)
                : (<Ionicons name="trash-outline" size={35}/>)
            }

          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.SpacesRow}>
            {SpacesList.map((title, index) => (
                <SpacesItem key={index} SpacesData={title} onDelete={handleDeleteCategory}/>
            ))}
          </View>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  SpacesRow: {
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

export class Space {
  index: number;
  title: string;
  isToggleDelete: boolean;
}

export default SpacesPage;