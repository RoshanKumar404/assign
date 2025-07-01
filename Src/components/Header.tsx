import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { chatScreenStyles } from '../Styles/chatScreenStyles';

const Header = () => {
  const [Modalvisible, setModalvisible] = useState(false);

  const toggler = () => {
    setModalvisible(!Modalvisible);
  };

  return (
    <View style={chatScreenStyles.headerContainer}>
      <TouchableOpacity style={chatScreenStyles.headerButton}>
         <Text style={chatScreenStyles.headerTitle}>←</Text>
      </TouchableOpacity>

      <Text style={chatScreenStyles.headerTitle}>Trip 1</Text>

      <TouchableOpacity style={chatScreenStyles.headerButton}>
      <Text style={chatScreenStyles.headerIcon}>&#9998;</Text>
      </TouchableOpacity>

      <TouchableOpacity style={chatScreenStyles.headerButton} onPress={toggler}>
         <Text style={chatScreenStyles.headerIcon}>&#8942;</Text>
      </TouchableOpacity>

      {Modalvisible && (
        <View style={chatScreenStyles.moreOptionsDropdown}>
          <Text style={chatScreenStyles.dropdownItem}>Members</Text>
          <Text style={chatScreenStyles.dropdownItem}>Share Number</Text>
          <Text style={chatScreenStyles.dropdownItem}>Report</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
