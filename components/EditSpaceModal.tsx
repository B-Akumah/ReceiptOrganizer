import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React, {useState} from "react";
import SelectableIconGrid from "./SelectableIconGrid";

const EditSpaceModal = ({isModalVisible, onModalClose, onSubmit, currentTitle, currentIcon}) => {


  const [nameInputValue, setNameInputValue] = useState<string>(currentTitle);
  const [selectedIcon, setSelectedicon] = useState<string>(currentIcon);
  const [isInvalidForm, markInvalidForm] = useState<boolean>(false);

  const setNewSpacesTitleInput = (text) => {
    setNameInputValue(text);
    resetValidation()
  }

  const handleCloseModal = () => {
    markInvalidForm(false);
    onModalClose(nameInputValue, selectedIcon);
    clearForm()
  }
  const handleSubmitModal = () => {
    if (checkFormValidation()) {
      onSubmit(nameInputValue, selectedIcon);
      setNameInputValue('');
      markInvalidForm(false);
    } else {
      markInvalidForm(true);
    }
  }

  const handleSelectedIcon = (iconName) => {
    setSelectedicon(iconName)
    resetValidation()
  }

  const checkFormValidation = (): boolean => {
    return (nameInputValue.length > 0 && selectedIcon.length > 0);
  }
  const resetValidation = () => {
    markInvalidForm(false);
  }

  const clearForm = () => {
    setNameInputValue('');
    setSelectedicon('')
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

            <Text style={styles.modalTitle}>Edit Spaces</Text>
            <View style={styles.modalForm}>
              <Text style={styles.modalText}>Name:</Text>
              <TextInput
                  style={styles.input}
                  value={nameInputValue}
                  onChangeText={setNewSpacesTitleInput}
              />
            </View>
            <View style={styles.iconGrid}>
              <SelectableIconGrid onSelectedIcon={handleSelectedIcon}/>
            </View>
            <View style={styles.submitGroup}>
              {
                isInvalidForm ?
                    <Text
                        style={styles.errorText}>
                      Please fill out all selections above
                    </Text>
                    : null
              }

              <TouchableOpacity
                  onPress={handleSubmitModal}
                  style={[styles.submitButton,
                    isInvalidForm && styles.submitButtonError]}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity></View>
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
    paddingTop: 15,
    paddingBottom: 15,
    width: '85%', // 80% width
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalForm: {
    width: '100%',
    marginTop: 20,

  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
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
    width: "80%",
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonError: {
    borderColor: '#ff0000',
    borderWidth: 2,
  },
  modalCloseIcon: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 10,
    paddingTop: 10,
  },
  iconGrid: {
    width: "100%",
    height: 275,
  },
  errorText: {
    color: '#ff0000'
  },
  submitGroup: {
    width: "100%",
    alignItems: "center",
    marginTop: -40,
  }
});

export default EditSpaceModal;