import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatBubble = ({ item }) => {
  const { text, avatar, isMe } = item;

  return (
    <View style={[
      styles.bubbleContainer,
      isMe ? styles.myMessageContainer : styles.otherMessageContainer,
    ]}>
      {!isMe && (
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
      {isMe && ( 
        <Image source={{ uri: avatar }} style={styles.avatar} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
    maxWidth: '80%',
  },
  myMessageContainer: {
    alignSelf: 'flex-end', 
    marginLeft: 'auto', 
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
    marginRight: 'auto',
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
   
  },
  myMessageBubble: {
    backgroundColor: '#1C63D5', 
    borderBottomRightRadius: 2, 
  },
  otherMessageBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 2, 
  },
  myMessageText: {
    color: '#ffffff',
  },
  otherMessageText: {
    color: '#606060',
  },
});

export default ChatBubble;