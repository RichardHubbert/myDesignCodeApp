import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import { useUser } from '@clerk/clerk-expo';
export default function Intro({business}) {
 
    const router=useRouter();

    const OnDelete=()=>{
        Alert.alert('Do you want to Delete?','Do you really want to Delete this business?',[
            {
                text:'Cancel',
                style:'cancel',
                
            },
            {
                text:'Delete',
                style:'destructive',
                onPress:()=>deleteBusiness()
            }
        ])
    }

    const deleteBusiness=async()=>{
        console.log("Delete Business");
        await deleteDoc(doc(db,'BusinessList',business?.id));
        router.back();
        ToastAndroid.show('Business Deleted!',ToastAndroid.LONG)
    }
    return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            paddingTop:60,
            paddingLeft:20
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back-circle" size={60} color="black" />
            </TouchableOpacity>
       
        {/* <Ionicons name="heart-outline" size={60} color="black" /> */}
        </View>
        <Image source={{uri:business?.imageUrl}}
            style={{
                width:'100%',
                height:360
            }}
        />

            <View
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:20,
                marginTop:-20,
                backgroundColor:'#71c9d7',
                borderTopLeftRadius:25,
                borderTopRightRadius:25,
            }}
            >
        <View style={{
            padding:1,
            marginTop:-10,
            backgroundColor:'#71c9d7',
            borderTopLeftRadius:25,
            borderTopRightRadius:25
        }}>
            <Text style={{
                fontSize:24,
                fontFamily:'outfit-bold'
            }}>{business?.name}
           
            </Text>
            <Text
            style={{
                fontFamily:'outfit',
                fontSize:18
            }}
            >{business?.address}</Text>

        </View>
       <TouchableOpacity onPress={()=>OnDelete()}>
        {/* <Ionicons name="trash" size={24} color="red" /> */}

        </TouchableOpacity>
        </View>
    </View>
  )
}