import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GreetHeader from '../../components/greetHeader/GreetHeader'

export default function Home() {
  return (
    <View style={styles.container}>
      <GreetHeader/>

      <View>
        <Text style={styles.text}>Discover Your Favorite Podcast🎙</Text>
      </View>
    </View>
    
  )
}

const styles= StyleSheet.create({
  container:{
    padding: 20,
  },
  text:{
    fontSize: 30,
    fontWeight: 500,
    marginTop: 20,
  }
})