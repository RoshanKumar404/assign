import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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


export const styles = StyleSheet.create({

bubbleContainer: {
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