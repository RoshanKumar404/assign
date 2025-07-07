import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* LEFT: Back arrow + Title */}
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Trip 1</Text>
      </View>

      {/* RIGHT: Edit icon */}
      <TouchableOpacity style={styles.headerButton}>
        <Icon name="create-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // puts left & right apart
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
