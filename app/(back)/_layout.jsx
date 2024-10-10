import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {Colors} from '../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList } from '@react-navigation/drawer';
import LaptopGirl from '../../assets/images/laptopGirl_001.svg';




export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar 
        hidden
      />
      <Drawer 
        screenOptions={{
          drawerPosition: "left",
          drawerType: "slide",
          drawerStyle: {
            backgroundColor: "#333333",
            width: 250,
            
          },
          headerTintColor: "#ffffff",
          headerShown: true,
          drawerLabelStyle: {
            color: "#ffffff",
            fontSize:18,
          }
        }}

        drawerContent={
          (props)=>{
            return (
              <SafeAreaView>
                <View style={{
                  height:300,
                  width: 240,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#333333",
                  paddingBottom: 12,
                  
                }}>
                  <Image
                    source={require("../../assets/images/richard.jpeg")} // Changed from laptopGirlWhite_001.png to richard.jpeg
                    resizeMode="cover" // Changed from "contain" to "cover" for better fit of a profile picture
                    style={{
                      height: 180,
                      width: 180,
                      borderRadius: 90, // Added to make the image circular
                    }}
                  />
                  <Text style={{
                    fontSize: 22,
                    color: "#ffffff",
                    fontFamily:'outfit-bold',
                  }}>Richard</Text>
                  <Text style={{
                    fontSize:20,
                    color: "#ffffff",
                  }}>Product | UI | Designer</Text>
                </View>
                
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
      >
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'The Home of Design',
            drawerIcon: ({ size, colour }) => (
                <Ionicons name='home-outline' size={size} color={Colors.WHITE} />
            ),
            headerStyle: {
              backgroundColor: Colors.GRAY
              
            }
          }}
        />

{/*       <Drawer.Screen
          name="explore" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Explore',
            title: 'Explore',
            drawerIcon: ({ size, colour }) => (
                <Ionicons name='home-outline' size={size} color={Colors.WHITE} />
            ),
            headerStyle: {
              backgroundColor: Colors.GRAY
            }
          }}
        /> */}

      <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
            drawerIcon: ({ size, colour }) => (
                <Ionicons name='person-outline' size={size} color={Colors.WHITE} />
            ),
            headerStyle: {
              backgroundColor: Colors.GRAY
            }
          }}
        />



      </Drawer>
    </GestureHandlerRootView>
  )
}