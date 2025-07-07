
import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { chatScreenStyles } from '../Styles/chatScreenStyles'; // Import styles
import Icon  from 'react-native-vector-icons/Ionicons';
import Entypo  from 'react-native-vector-icons/Entypo';
//import Lucid  from 'react-native-vector-icons/Lucid';



const TextInputWithAttachment = ({
  message,
  onChangeText,
  onSendMessage,
  onAttachmentPress,
  placeholder = "Type your message...", 
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
         <Entypo name="attachment" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSendMessage} >
       <Icon name="send-outline" size={30} color="black" />
 
      </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default TextInputWithAttachment;
