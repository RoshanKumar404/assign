// components/ChatBubble.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatBubble = ({ item }) => {
  const { text, avatar, isMe } = item;

  return (
    <View style={[
      styles.bubbleContainer,
      isMe ? styles.myMessageContainer : styles.otherMessageContainer,
    ]}>
      {!isMe && ( // Only show avatar for messages from others
        <Image source={{ uri: avatar }} style={styles.avatar} />
      )}
      <View style={[
        styles.messageBubble,
        isMe ? styles.myMessageBubble : styles.otherMessageBubble,
      ]}>
        <Text style={isMe ? styles.myMessageText : styles.otherMessageText}>
          {text}
        </Text>
      </View>
      {isMe && ( // Only show avatar for messages from me (if you want it on the right too)
        <Image source={{ uri: avatar }} style={styles.avatar} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Align text to the bottom of the avatar if heights differ
    marginVertical: 4,
    maxWidth: '80%', // To prevent bubbles from taking full width
  },
  myMessageContainer: {
    alignSelf: 'flex-end', // Aligns the whole bubble to the right
    marginLeft: 'auto', // Pushes it to the right
  },
  otherMessageContainer: {
    alignSelf: 'flex-start', // Aligns the whole bubble to the left
    marginRight: 'auto', // Pushes it to the left
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  messageBubble: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    // Base styles for all bubbles
  },
  myMessageBubble: {
    backgroundColor: '#DCF8C6', // Light green for my messages
    borderBottomRightRadius: 2, // A small tweak for chat bubble corner
  },
  otherMessageBubble: {
    backgroundColor: '#E5E5EA', // Light grey for other messages
    borderBottomLeftRadius: 2, // A small tweak for chat bubble corner
  },
  myMessageText: {
    color: '#000',
  },
  otherMessageText: {
    color: '#000',
  },
});

export default ChatBubble;