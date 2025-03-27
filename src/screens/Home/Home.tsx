import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import GreetHeader from '../../components/greetHeader/GreetHeader'
import Message from '../../components/Message/Message'
import SearchBar from '../../components/SearchBar/SearchBar'
import color from '../../config/themes/colors'
import TrendingCard from '../../components/trendingCard/TrendingCard'

export default function Home() {
  return (
    <>
    <StatusBar animated backgroundColor="#ffffff" barStyle="dark-content" />
    <View style={styles.container}>
      <GreetHeader/>
      <Message message="Discover Your Favorite Podcast 🎙"/>
      <SearchBar placeholder='Find Your Suitable Podcast' />
      <TrendingCard/>
    </View>
    </>
  )
}

const styles= StyleSheet.create({
  container:{
    gap: 25,
    paddingVertical: 30,
    backgroundColor: color.baseColor,
    flex: 1,
  },
})