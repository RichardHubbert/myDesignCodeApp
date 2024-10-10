import { View, Text, ScrollView, Button, StatusBar } from 'react-native'
import { useNavigation } from 'expo-router'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'
import { DrawerActions } from '@react-navigation/native';
import ProfileContent from '../../components/Profile/ProfileContent';

export default function home() {

  const navigation = useNavigation();

/*   const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  } */

  return (
    <ScrollView>

        {/* Header  */}
          <Header/>
{/*           <Text style={{
          padding:20,
          fontFamily:'outfit-thin',
          fontSize:25
        }}>home</Text> */}

        {/* Slider  */}

        {/* Category  */}
        <View>
{/*           <Text>Home</Text> */}
          {/* <Button title="Open drawer" onPress={onToggle} /> */}
        </View>


        <Category/>

        {/* Popular Business List  */}
        <PopularBusiness/>
        
        <View style={{height:50}}>

        </View>
    </ScrollView>
  )
}