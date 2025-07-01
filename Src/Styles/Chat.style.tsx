// // src/styles/chatScreenStyles.js
// import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// export const chatScreenStyles = StyleSheet.create({
//   fullScreenContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   // --- Header Styles ---
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#fff',
//   },
//   headerButton: {
//     padding: 5,
//   },
//   headerIcon: {
//     fontSize: 24,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   headerTitle: {
//     flex: 1,
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   moreOptionsDropdown: {
//     position: 'absolute',
//     top: 40,
//     right: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5,
//     padding: 10,
//     zIndex: 10,
//     display: 'none', // Controlled by state in real app
//   },
//   dropdownItem: {
//     paddingVertical: 8,
//     fontSize: 16,
//     color: '#333',
//   },
//   // --- Trip Info Styles ---
//   tripInfoContainer: {
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#fff',
//   },
//   tripFromRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//     justifyContent: 'space-between',
//   },
//   mainAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   tripFromText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   tripToText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   moreOptionsButton: {
//     padding: 5,
//     marginLeft: 'auto',
//   },
//   moreOptionsIcon: {
//     fontSize: 24,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   tripDateRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 5,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     marginTop: 5,
//   },
//   tripDateText: {
//     fontSize: 12,
//     color: '#999',
//     marginRight: 10,
//   },
//   miniAvatarsContainer: {
//     flexDirection: 'row',
//   },
//   miniAvatar: {
//     width: 25,
//     height: 25,
//     borderRadius: 12.5,
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   // --- Chat List Styles ---
//   chatListContent: {
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     justifyContent: 'flex-end',
//   },
//   messageContainer: {
//     maxWidth: '80%',
//     marginBottom: 10,
//     alignSelf: 'flex-start',
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//   },
//   myMessageContainer: {
//     alignSelf: 'flex-end',
//     flexDirection: 'row-reverse',
//   },
//   otherMessageContainer: {
//     alignSelf: 'flex-start',
//   },
//   avatar: {
//     width: 35,
//     height: 35,
//     borderRadius: 17.5,
//     marginRight: 8,
//   },
//   messageBubble: {
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderRadius: 15,
//     fontSize: 15,
//     lineHeight: 20,
//   },
//   myMessageBubble: {
//     backgroundColor: '#007AFF',
//     color: '#fff',
//     marginLeft: 'auto',
//     borderBottomRightRadius: 2,
//   },
//   otherMessageBubble: {
//     backgroundColor: '#F0F0F0',
//     color: '#333',
//     borderBottomLeftRadius: 2,
//   },
//   // --- Input Area Styles ---
//   inputArea: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     paddingBottom: Platform.OS === 'ios' ? 20 : 0,
//   },
//   textInputWrapper: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 25,
//     paddingRight: 10,
//     backgroundColor: '#f9f9f9',
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     minHeight: 45,
//     maxHeight: 120,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   attachmentButton: {
//     padding: 8,
//   },
//   attachmentIcon: {
//     fontSize: 22,
//     color: '#666',
//   },
//   sendButton: {
//     backgroundColor: '#4CAF50',
//     borderRadius: 25,
//     width: 45,
//     height: 45,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   // --- Modal Styles ---
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     justifyContent: 'flex-end',
//   },
//   attachmentOptionsContainer: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: '100%',
//     paddingBottom: Platform.OS === 'ios' ? 30 : 10,
//   },
//   attachmentOptionButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 80,
//     height: 80,
//   },
//   attachmentOptionIcon: {
//     fontSize: 30,
//     color: '#666',
//     marginBottom: 5,
//   },
//   attachmentOptionText: {
//     fontSize: 14,
//     color: '#333',
//   },
// });