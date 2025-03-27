import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface MessageProps {
    message: string;
}

export default function Message({message}: MessageProps) {
    return (
        <View>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 500,
        paddingHorizontal: 20,
     
    },
})