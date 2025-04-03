import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import dummyCategories from '../../data/categoryData';
import color from '../../config/themes/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

export default function TrendingCard() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.trending}>Categories 🎶</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={dummyCategories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{uri: item.imageUrl}}
                style={styles.imageBackground}></ImageBackground>
            </TouchableOpacity>

            <View style={styles.categoryNameContainer}>
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false} // Hides scrollbar
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.3,
    height: 120,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  trending: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: color.primary,
  },
  cardContainer: {
    paddingTop: 10,
  },
  categoryNameContainer: {
    marginLeft: 25,
    paddingTop: 8,
  },
  categoryName:{
    fontSize: 16,
  }
});
