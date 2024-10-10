import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from './../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#39008B',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'flex-start'
    }}>
      <View style={{
        alignItems: 'flex-start', // Changed from 'flex-start' to 'center'
      }}>
        <Text style={{
            color: '#ffffff',
            fontSize: 20,

        }}>Welcome,</Text>
        <Text style={{
            fontSize: 19,
            color: '#ffffff',
            fontFamily: 'outfit-medium',
            alignContent: 'flex-start',
            textAlign: 'left', // Added to center-align text
        }}></Text>
      </View>
      {/* Search Bar code remains commented out */}
    </View>
  )
}