import React, { useEffect } from 'react';
import { View } from 'react-native';
import { io } from 'socket.io-client';
import ChatScreen from './Src/Screens/chatScreen';

export default function App() {
  useEffect(() => {
    const socket = io('http://192.168.1.61:3000'); 
    socket.on('connect', () => {
      console.log('Connected to Socket.io server');
    });

    return () => {
      socket.disconnect();
      console.log('Socket disconnected');
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ChatScreen />
    </View>
  );
}
