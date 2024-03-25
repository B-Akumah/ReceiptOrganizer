import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {lla} from "../App";

const ReceiptCategory = ({title}) => {
  const windowWidth = Dimensions.get('window').width;
  const containerWidth = windowWidth * 0.40;
  const containerHeight: lla = windowWidth * 0.40;

  return (
      <View style={[styles.container, {width: containerWidth, height: containerHeight}]}>
        <View style={styles.iconContainer}>
          <Ionicons name="receipt" size={24} color="#fff"/>
        </View>
        <Text style={styles.text}>{title.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#595959',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
});

export default ReceiptCategory;
