
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { chatScreenStyles } from '../Styles/chatScreenStyles'; // Import styles

const AttachmentOptionsModal = ({ visible, onClose, onCameraPress, onVideoPress, onDocumentPress }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={chatScreenStyles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={chatScreenStyles.attachmentOptionsContainer}>
          <TouchableOpacity style={chatScreenStyles.attachmentOptionButton} onPress={onCameraPress}>
            <Text style={chatScreenStyles.attachmentOptionIcon}>&#128247;</Text> {/* Camera */}
            <Text style={chatScreenStyles.attachmentOptionText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={chatScreenStyles.attachmentOptionButton} onPress={onVideoPress}>
            <Text style={chatScreenStyles.attachmentOptionIcon}>&#128250;</Text> {/* Video */}
            <Text style={chatScreenStyles.attachmentOptionText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={chatScreenStyles.attachmentOptionButton} onPress={onDocumentPress}>
            <Text style={chatScreenStyles.attachmentOptionIcon}>&#128221;</Text> {/* Document/Text */}
            <Text style={chatScreenStyles.attachmentOptionText}>Document</Text>
          </TouchableOpacity>
          
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AttachmentOptionsModal;