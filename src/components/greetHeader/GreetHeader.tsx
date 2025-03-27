import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../../config/themes/colors/index'
import { typography } from '../../config/themes/typography/index'

export default function GreetHeader() {
  return (
    // Main container
    <View style={styles.container}>
      {/* Profile and greeting text */}
      <View style={styles.greeting}>
        <Icon style={styles.icon} name="user-alt" size={25} color="#fff" />
        <View >
        <Text style={styles.greetText}>Good Morning</Text>
        <Text style={styles.name}>Talal</Text>
        </View>
      </View>
      {/* Profile and greeting text ends here */}
      <TouchableOpacity>
      <Icon style={styles.bellIcon} name="bell" size={25} color="#012458" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon:{
    padding: 10,
    borderRadius: 50,
    backgroundColor: color.primary,
    marginRight: 10,
  },
  greetText:{
    fontFamily: 'Fontspring-Bold',
    fontSize: typography.sizes.regular,
    color: color.grey,
    fontWeight: typography.weights.regular,
  },
  name:{
    fontFamily: 'Fontspring-Bold',
    fontSize: typography.sizes.large,
    color: color.text,
    fontWeight: typography.weights.bold,
  },
  bellIcon: {
    padding: 10,
    borderRadius: 100,
    borderColor: color.grey,
    borderWidth: 1,
    borderStyle: 'solid',
  }
})