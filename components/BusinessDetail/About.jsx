import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function About({business}) {
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff',
       
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:24,

      }}>About</Text>
      <Text>Technologies used</Text>
      <Text
        style={{
        fontFamily:'outfit',
        lineHeight:25,
        fontSize:16,
        color:Colors.PRIMARY,
      }}
      >{business?.technical}</Text>
      <Text
      style={{
        fontFamily:'outfit',
        fontSize:14,
        lineHeight:25
      }}
      >{business?.about}</Text>
            
      
    </View>
  )
}