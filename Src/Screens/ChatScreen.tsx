import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StatusBar, Alert } from 'react-native';
import Header from '../components/Header';
import TripInfo from '../components/TripInfo';
import ChatBubble from '../components/ChatBubble';
import AttachmentOptionsModal from '../components/AttachmentOptionsModal';
import TextInputWithAttachment from '../components/TextInputWithAttachment';
import { chatScreenStyles } from "../Styles/chatScreenStyles";

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('https://qa.corider.in/assignment/chat?page=0');
        const data = await res.json(); // Assuming res.json() now works and gives valid JSON

        // It's good practice to log the data to verify its structure
        console.log("Fetched API Data:", data);
        if (!data || !Array.isArray(data.chats)) {
            console.error("API response does not contain a 'chats' array:", data);
            Alert.alert('Error', 'Invalid data format from API. Missing "chats" array.');
            setChatLog([]);
            return;
        }

        const apiMessages = data.chats.map((item) => ({
          id: item.id.toString(),
          text: item.message,
          avatar: item.sender.image,
          senderId: item.sender.user_id,
          // Use the 'self' parameter directly from item.sender to set isMe
          isMe: item.sender.self, // <--- This is the correct change!
        }));
        setChatLog(apiMessages);
      } catch (err) {
        console.error('Error fetching or parsing messages:', err);
        Alert.alert('Error', 'Failed to load messages. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

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
        onAttachmentPress={() => setShowAttachmentOptions(true)}
        placeholder="Reply to @Rohit Yadav"
      />

      <AttachmentOptionsModal
        visible={showAttachmentOptions}
        onClose={() => setShowAttachmentOptions(false)}
        onCameraPress={() => Alert.alert('Action', 'Camera button pressed!')}
        onVideoPress={() => Alert.alert('Action', 'Video button pressed!')}
        onDocumentPress={() => Alert.alert('Action', 'Document button pressed!')}
      />
    </View>
  );
}