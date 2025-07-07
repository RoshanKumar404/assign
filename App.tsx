import React, { useEffect } from 'react';
import { View } from 'react-native';
import { io } from 'socket.io-client';
import ChatScreen from './Src/Screens/chatScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ChatScreen />
    </View>
  );
}
