
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { chatScreenStyles } from "../Styles/chatScreenStyles"; // Import styles

const TripInfo = () => (
  <View style={chatScreenStyles.tripInfoContainer}>
    <View style={chatScreenStyles.tripFromRow}>
     
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
        style={chatScreenStyles.mainAvatar}
      />
      <View>
        <Text style={chatScreenStyles.tripFromText}>From IGI Airport, T3</Text>
        <Text style={chatScreenStyles.tripToText}>To Sector 28</Text>
      </View>
      <TouchableOpacity style={chatScreenStyles.moreOptionsButton}>
        <Text style={chatScreenStyles.moreOptionsIcon}>&#8942;</Text>
      </TouchableOpacity>
    </View>
    <View style={chatScreenStyles.tripDateRow}>
      <Text style={chatScreenStyles.tripDateText}>12 JAN. 2025</Text>
     
      <View style={chatScreenStyles.miniAvatarsContainer}>
          <Image
              source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
              style={chatScreenStyles.miniAvatar}
          />
          <Image
              source={{ uri: 'https://feeds.abplive.com/onecms/images/uploaded-images/2025/06/30/e61911c7bb231758fddf8e5c4ad127e01751268075698937_original.png?impolicy=abp_cdn&imwidth=1200&height=675' }}
              style={[chatScreenStyles.miniAvatar, { marginLeft: -5 }]}
          />
      </View>
    </View>
  </View>
);

export default TripInfo;