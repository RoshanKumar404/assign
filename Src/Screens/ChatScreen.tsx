import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StatusBar, Alert } from 'react-native';
import { io } from 'socket.io-client';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ChatBubble from '../components/ChatBubble';
import AttachmentOptionsModal from '../components/AttachmentOptionsModal';
import TextInputWithAttachment from '../components/TextInputWithAttachment';
import {chatScreenStyles} from "../Styles/chatScreenStyles";

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const socket = io('http://192.168.1.61:3000');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('https://qa.corider.in/assignment/chat?page=0');
        const data = await res.json();
        const apiMessages = data.chats.map((item) => ({
          id: item.id.toString(),
          text: item.message,
          avatar: item.sender.image,
          senderId: item.sender.user_id,
          isMe: item.sender.status === 'You',
        }));
        setChatLog(apiMessages);
      } catch (err) {
        console.error('Error fetching messages:', err);
        Alert.alert('Error', 'Failed to load messages. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
    return () => {
      //jai sri ramm
    };
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to Socket.io');
    });
    socket.on('message', (msg) => {
      console.log('Socket Received:', msg);
    });

    return () => {
      socket.off('message');
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message);
      setChatLog((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: message,
          avatar:"https://avatars.githubusercontent.com/u/140232541?v=4",
          isMe: true,
        },
      ]);
      setMessage('');
      setShowAttachmentOptions(false); // Close modal after sending
    }
  };

  const handleCameraPress = () => {
     setShowAttachmentOptions(false);
    Alert.alert('Action', 'Camera button pressed!');
  };

  const handleVideoPress = () => {
    setShowAttachmentOptions(false);
    Alert.alert('Action', 'Video button pressed!');
  };

  const handleDocumentPress = () => {
    setShowAttachmentOptions(false);
    Alert.alert('Action', 'Document button pressed!');
  };


  if (loading) {
    return (
      <View style={chatScreenStyles.loaderContainer}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <View style={chatScreenStyles.fullScreenContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header />
      <TripInfo />

      <FlatList
        data={chatLog}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatBubble item={item} />}
        inverted={false}
        contentContainerStyle={chatScreenStyles.chatListContent}
      />

      <TextInputWithAttachment
        message={message}
        onChangeText={setMessage}
        onSendMessage={sendMessage}
        onAttachmentPress={() => setShowAttachmentOptions(true)}
        placeholder="Reply to @Rohit Yadav"
      />

      <AttachmentOptionsModal
        visible={showAttachmentOptions}
        onClose={() => setShowAttachmentOptions(false)}
        onCameraPress={handleCameraPress}
        onVideoPress={handleVideoPress}
        onDocumentPress={handleDocumentPress}
      />
    </View>
  );
}