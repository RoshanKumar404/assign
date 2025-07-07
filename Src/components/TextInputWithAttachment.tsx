
import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { chatScreenStyles } from '../Styles/chatScreenStyles'; // Import styles

const TextInputWithAttachment = ({
  message,
  onChangeText,
  onSendMessage,
  onAttachmentPress,
  placeholder = "Type your message...", // Add a default placeholder
}) => {
  return (
    <View style={chatScreenStyles.inputArea}>
      <View style={chatScreenStyles.textInputWrapper}>
        <TextInput
          value={message}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#888"
          style={chatScreenStyles.input}
          multiline
          keyboardAppearance='default'
          keyboardType='email-address'
        />
        <TouchableOpacity
          style={chatScreenStyles.attachmentButton}
          onPress={onAttachmentPress}
        >
          <Text style={chatScreenStyles.attachmentIcon}>📎
            </Text> 
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSendMessage} style={chatScreenStyles.sendButton}>
        <Text style={chatScreenStyles.sendButtonText}>➤</Text>
 
      </TouchableOpacity>
    </View>
  );
};

export default TextInputWithAttachment;
