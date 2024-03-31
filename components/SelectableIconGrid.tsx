import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SelectableIconGrid = ({onSelectedIcon}) => {
  const [selectedIcon, setSelectedIcon] = useState('receipt');

  const icons = [
    {name: 'home-outline'},
    {name: 'airplane-outline'},
    {name: 'fast-food-outline'},
    {name: 'car-outline'},
    {name: 'card-outline'},
    {name: 'briefcase-outline'},
    {name: 'heart-outline'},
    {name: 'barbell-outline'},
    {name: 'library-outline'},
    {name: 'paw-outline'},
    {name: 'restaurant-outline'},
    {name: 'american-football-outline'},
  ];

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName)
    onSelectedIcon(iconName)
  };

  return (
      <View style={styles.container}>
        <Text style={styles.modalText}>Icon:</Text>
        <FlatList
            data={icons}
            numColumns={4}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={[
                      styles.icon,
                      selectedIcon === item.name && styles.selectedIcon // Apply selectedIcon style if the icon is selected
                    ]}
                    onPress={() => handleIconSelect(item.name)}>
                  <Ionicons name={item.name} size={35}/>
                </TouchableOpacity>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  selectedIconContainer: {
    marginTop: 20,
  },
  icon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedIcon: {
    backgroundColor: '#a0e2ff', // Change background color for selected icon
  },
});

export default SelectableIconGrid;
