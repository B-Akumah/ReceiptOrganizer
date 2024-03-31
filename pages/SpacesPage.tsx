import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import React, {useContext, useEffect, useState} from "react";
import SpacesItem from "../components/SpacesItem";
import AddSpaceModal from "../components/AddSpaceModal";
import {Space, SpaceItem} from "../model/Space";
import AppContext from "../context/AppContext";

let isConfigurableMode = false;

let spaceInitItem: SpaceItem[] = []

function SpacesPage() {

  const [SpacesList, setSpacesList] = useState<SpaceItem[]>([]);
  const {Spaces, setSpaces} = useContext(AppContext);

  const [isAddModalVisible, setAddModalVisible] = useState(false)
  const [isEditModalVisible, setEditModalVisible] = useState(false)

  useEffect(() => {
    spaceInitItem = []
    console.log(Spaces)
    for (const data of Spaces) {
      spaceInitItem.push(new SpaceItem(data, isConfigurableMode))
    }
    updateSpaceList(spaceInitItem)
    // You can perform any initialization logic here
  }, []); // Empty dependency array ensures this runs only once on mount

  const addSpaces = () => {
    isConfigurableMode = false;
    for (const Spaces: SpaceItem of SpacesList) {
      Spaces.isToggleDelete = isConfigurableMode
    }
    setAddModalVisible(true);
  };
  const toggleSpacesSettings = () => {
    isConfigurableMode = !isConfigurableMode
    for (const Spaces: SpaceItem of SpacesList) {
      Spaces.isToggleDelete = isConfigurableMode
    }
    updateSpaceList([...SpacesList])
  };

  const handleDeleteSpace = (spaceToDelete: SpaceItem) => {
    let filteredList = SpacesList.filter((item: SpaceItem) => item.space.index !== spaceToDelete.space.index);
    if (filteredList.length == 0) {
      isConfigurableMode = false;
    }
    updateSpaceList(SpacesList.filter((item: SpaceItem) => item.space.index !== spaceToDelete.space.index))
  }

  const handleEditCategory = () => {

  }
  const handleCloseAddModal = (nameInputValue, iconValue) => {
    setAddModalVisible(false)
  }

  const handleSubmitModal = (nameInputValue, iconValue) => {
    handleCloseAddModal(nameInputValue, iconValue)

    const randomUuid: number = Math.floor(Math.random() * 100);

    updateSpaceList(
        [...SpacesList,
          new SpaceItem(
              new Space(
                  nameInputValue.toLowerCase() + '1' + randomUuid,
                  SpacesList.length,
                  nameInputValue,
                  iconValue
              ),
              isConfigurableMode)
        ]
    )
  }

  const updateSpaceList = (spaceItemList: SpaceItem[]) => {
    setSpacesList(spaceItemList)
    let newSpaces: Space[] = []

    for (const spaceItem of spaceItemList) {
      newSpaces.push(spaceItem.space)
    }
    console.log(newSpaces)
    setSpaces(newSpaces)
  }

  const editSpace = () => {
    toggleSpacesSettings()
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
          {isConfigurableMode ?
              <TouchableOpacity onPress={toggleSpacesSettings}>
                <Text style={styles.trashDone}>Done</Text>
              </TouchableOpacity> : null
          }

        </View>

        <AddSpaceModal
            isModalVisible={isAddModalVisible}
            onModalClose={handleCloseAddModal}
            onSubmit={handleSubmitModal}
        />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <View style={styles.SpacesRow}>
            {SpacesList.map((spaceItem, index) => (
                <TouchableOpacity
                    key={index}
                    onLongPress={editSpace}
                    disabled={isConfigurableMode}
                >
                  <SpacesItem
                      SpacesData={spaceItem}
                      icon={spaceItem.space.icon}
                      onDelete={handleDeleteSpace}
                      onEdit={handleEditCategory}
                  />
                </TouchableOpacity>
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

export default SpacesPage;