import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function CategoryItem({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
        <View style={{padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:99,
        marginRight:15,
        alignItems:'center',
        
        }}>
            <Image source={{uri:category.icon}}
            style={{width:48,
            height:48,
            alignItems:'center',         
          }}
            />
            
        </View>
        <Text style={{
            width:78,
            fontSize:12,
            fontFamily:'outfit-bold',
            textAlign:'center',
            alignItems:'center',
            marginTop:5
        }}>{category.name}</Text>
    </TouchableOpacity>
  )
}