import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";

const AddSpaceModal = ({isModalVisible, onModalClose, onSubmit}) => {


  const [nameInputValue, setNameInputValue] = useState('');

  const setNewSpacesTitleInput = (text) => {
    setNameInputValue(text);
  }

  const handleCloseModal = () => {
    onModalClose(nameInputValue);
    setNameInputValue('');
  }
  const handleSubmitModal = () => {
    onSubmit(nameInputValue);
    setNameInputValue('');
  }

  return (

      <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={null}>
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity
                style={styles.modalCloseIcon}
                onPress={handleCloseModal}>
              <Ionicons name="close-outline" size={30}/>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Add New Spaces</Text>
            <View style={styles.modalForm}>
              <Text style={styles.modalText}>Name</Text>
              <TextInput
                  style={styles.input}
                  value={nameInputValue}
                  onChangeText={setNewSpacesTitleInput}
              />
            </View>
            <TouchableOpacity onPress={handleSubmitModal} style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}


const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    position: "relative",
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    paddingTop: 50,
    width: '80%', // 80% width
    height: '50%', // 70% height
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalForm: {
    width: '100%',
    height: '50%', // 70% height
    marginTop: 30,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    height: 50,
    fontSize: 20
  },
  submitButton: {
    backgroundColor: '#2f2f2f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 10,
    paddingTop: 10,
  }
});

export default AddSpaceModal;