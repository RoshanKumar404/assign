import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons'
import { chatScreenStyles } from '../Styles/chatScreenStyles';

const Header = () => {
  const [Modalvisible, setModalvisible] = useState(false);

  const toggler = () => {
    setModalvisible(!Modalvisible);
  };

  return (
    <View style={chatScreenStyles.headerContainer}>
      <TouchableOpacity style={chatScreenStyles.headerButton}>
          <Icon name="arrow-back-outline" size={30} color="black" />
          {/* //<ion-icon name="arrow-back-outline"></ion-icon> */}
      </TouchableOpacity>

      <Text style={chatScreenStyles.headerTitle}>Trip 1</Text>

      <TouchableOpacity style={chatScreenStyles.headerButton}>
      <Icon name="create-outline" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={chatScreenStyles.headerButton} onPress={toggler}>
         <Icon name='ellipsis-vertical-outline' size={26} color='black'/>
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
