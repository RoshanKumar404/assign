
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const TripInfo = () => {
  const [Modalvisible, setModalvisible] = useState(false);

  const toggler = () => {
    setModalvisible(!Modalvisible);
  }
  return (
    <View style={styles.tripInfoContainer}>
      <View style={styles.tripFromRow}>

          <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
          style={styles.image}
        />
      </View>
      <View style={styles.row}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
          style={styles.image}
        />
      </View>
    </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>From </Text>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }}>IGI Airport, T3</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text >To </Text>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }} >Sector 28</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerButton} onPress={toggler}>
          <Icon name='ellipsis-vertical-outline' size={26} color='black' />
        </TouchableOpacity>
      </View>
      {Modalvisible && (
        <View style={styles.moreOptionsDropdown}>
          <View style={styles.dropdownRow}>
            <Icon name="people-outline" size={25} color="black" />
            <Text style={styles.dropdownItem}>Members</Text>
          </View>
          <View style={styles.dropdownRow}>
            <Icon name="call-outline" size={25} color="black" />
            <Text style={styles.dropdownItem}>Share Number</Text>
          </View>
          <View style={styles.dropdownRow}>
            <Octicons name="report" size={25} color="black" />
            <Text style={styles.dropdownItem}> Report</Text>
          </View>
          {/* <Text style={styles.dropdownItem}>Share Number</Text>
         <Text style={styles.dropdownItem}>Report</Text> */}
        </View>
      )}
      <View style={styles.tripDateRow}>
        <Text style={styles.tripDateText}>12 JAN. 2025</Text>

        {/* <View style={styles.miniAvatarsContainer}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/140232541?v=4' }}
            style={styles.miniAvatar}
          />
          <Image
            source={{ uri: 'https://feeds.abplive.com/onecms/images/uploaded-images/2025/06/30/e61911c7bb231758fddf8e5c4ad127e01751268075698937_original.png?impolicy=abp_cdn&imwidth=1200&height=675' }}
            style={[styles.miniAvatar, { marginLeft: -5 }]}
          />
        </View> */}
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  tripInfoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#FAF9F4',
  },
  tripFromRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  mainAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tripFromText: {
    fontSize: 1,
    fontWeight: 'bold',
    color: '#333',
  },
  tripToText: {
    fontSize: 14,
    color: '#E5E5E0',
  },
  moreOptionsDropdown: {
    position: 'absolute',
    top: 50, 
    right: 20, 
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 999,
  },
  headerButton: {
    padding: 5,
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItem: {
    marginLeft: 8,
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
  },
  moreOptionsButton: {
    padding: 5,
    marginLeft: 'auto',
  },
  moreOptionsIcon: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  tripDateRow: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
     borderTopWidth: 1,
     borderTopColor: '#eee',
     marginTop: 5,
  },
  tripDateText: {
    fontSize: 12,
    color: '#999',
    marginRight: 10,
  },
  miniAvatarsContainer: {
    flexDirection: 'row',
  },
 
   container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
})

export default TripInfo;