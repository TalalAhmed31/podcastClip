import { 
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList, Dimensions 
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { trendingData } from '../../data/trendingData';
import color from '../../config/themes/colors';

const { width } = Dimensions.get('window');

export default function TrendingCard() {
    return (
        <>
        <View style={styles.header}>
            <Text style={styles.trending}>Trending Podcast</Text>
            <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            horizontal
            data={trendingData}
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                    <ImageBackground source={{ uri: item.imageUrl }} style={styles.imageBackground}>
                        <View style={styles.container}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.details}>{item.episodes} episodes | {item.duration}</Text>
                            <TouchableOpacity style={styles.button}>
                                <View style={styles.iconContainer}>
                                    <Icon name="play" size={20} color="#000" />
                                </View>
                                <Text style={styles.buttonText}>Play</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 15 }} />} // Space between items
            contentContainerStyle={{ paddingHorizontal: 20 }} // Prevents first & last item cutoff
            showsHorizontalScrollIndicator={false} // Hides scrollbar
        />
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.85,
        height: 220,
        borderRadius: 20,
        overflow: 'hidden',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        overflow: 'hidden',
    },
    container: {
        padding: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay for better text visibility
    },
    title: {
        fontSize: width * 0.1, // Responsive font size
        color: '#fff',
        fontWeight: 'bold',
    },
    details: {
        fontSize: width * 0.035, 
        color: '#fff',
        marginVertical: 5,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.04,
        marginLeft: 8,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    trending:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    seeAll:{
        fontSize: 16,
        color: color.primary,
    },
});
