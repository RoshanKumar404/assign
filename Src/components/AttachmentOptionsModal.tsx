import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
//import { chatScreenStyles } from '../Styles/chatScreenStyles'; // Import styles
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure this is installed: npm install react-native-vector-icons

const AttachmentOptionsModal = ({ visible, onClose, onCameraPress, onVideoPress, onDocumentPress }) => {
  return (
    <Modal
  transparent={true}
  visible={visible}
  animationType="fade"
  onRequestClose={onClose}
>
  <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 8, paddingBottom: 50 }}>
    <View style={styles.bubbleContainer}>
      <View style={styles.bubble}>
        <TouchableOpacity onPress={onCameraPress}>
          <Icon name="camera-outline" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onVideoPress}>
          <Icon name="videocam-outline" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDocumentPress}>
          <Icon name="document-text-outline" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.triangle} />
    </View>
  </View>
</Modal>

  );
};

export default AttachmentOptionsModal;

// Example styles that you might have in chatScreenStyles.js
// I'm adding them here for completeness so you can see the full context
// Adjust these to match your actual chatScreenStyles.js
// You might want to define these specifically for the modal
export const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim the background
      justifyContent: 'flex-end', // Position content at the bottom
    },
    attachmentOptionsContainer: {
      backgroundColor: 'green',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      // paddingVertical: 20,
      // paddingHorizontal: 10,
      flexDirection: 'row', // Arrange buttons horizontally
      justifyContent: 'space-around', // Distribute space evenly
      alignItems: 'center',
      minHeight: 40, // Give it some height
    },
    attachmentOptionButton: {
      alignItems: 'center',
      padding: 10,
    },
    attachmentOptionText: {
      marginTop: 5,
      fontSize: 14,
      color: '#333',
    },bubbleContainer: {
  alignItems: 'center',
},
bubble: {
  backgroundColor: 'green',
  flexDirection: 'row',
  borderRadius: 30,
  padding: 10,
},
icon: {
  marginHorizontal: 10,
},

triangle: {
  width: 0,
  height: 0,
  borderLeftWidth: 10,
  borderRightWidth: 10,
  borderTopWidth: 12,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: 'green',
},

});