import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SpacesItem = ({SpacesData, onDelete}) => {
  const windowWidth = Dimensions.get('window').width;
  const containerWidth = windowWidth * 0.85;
  const containerHeight = windowWidth * 0.35;

  const handleDelete = () => {
    onDelete(SpacesData)
  }

  return (
      <View style={[styles.container, {width: containerWidth, height: containerHeight}]}>
        {
          SpacesData.isToggleDelete ? (
              <TouchableOpacity onPress={handleDelete} style={styles.closeIcon}>
                <Ionicons name="close-outline" size={45} color="#ff0000"/>
              </TouchableOpacity>
          ) : null
        }
        <View style={styles.iconContainer}>
          <Ionicons name="receipt" size={24} color="#fff"/>
        </View>
        <Text style={styles.text}>{SpacesData.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Ensure that close button is positioned relative to this container
    borderRadius: 20,
    backgroundColor: '#595959',
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeIcon: {
    position: 'absolute', // Position the close button absolutely within the container
    top: 3, // Adjust top and right values as needed to position the close button
    right: 3,
  },
});

export default SpacesItem;
