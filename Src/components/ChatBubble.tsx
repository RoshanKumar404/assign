
import React from 'react';
import { View, Text, Image } from 'react-native';
import { chatScreenStyles } from '../Styles/chatScreenStyles'; // Import styles

const ChatBubble = ({ item }) => {
  return (
    <View
      style={[
        chatScreenStyles.messageContainer,
        item.isMe ? chatScreenStyles.myMessageContainer : chatScreenStyles.otherMessageContainer,
      ]}
    >
      {!item.isMe && item.avatar && (
        <Image
          source={{ uri: item.avatar }}
          style={chatScreenStyles.avatar}
        />
      )}
      <Text
        style={[
          chatScreenStyles.messageBubble,
          item.isMe ? chatScreenStyles.myMessageBubble : chatScreenStyles.otherMessageBubble,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );
};

export default ChatBubble;