import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../../config/themes/colors'

interface PlaceHolderProps {
  placeholder: string,
  style?: ViewStyle,
}

export default function SearchBar({placeholder, style}: PlaceHolderProps) {

  const [searchQuery, setSearchQuery] = useState('')
  return (
    <View style={[styles.container, style]}>
      <Icon name="search" size={15} color={color.grey} style={styles.icon}/>
      <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={color.grey}
      value={searchQuery}
      onChangeText={setSearchQuery}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.field,
    padding: 10,
    borderRadius: 30,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  icon:{
    marginLeft: 10,
  }

});