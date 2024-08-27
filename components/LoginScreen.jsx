import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { Colors } from '@/constants/Colors'
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <SafeAreaView style={{
      backgroundColor:'#000000',
    }}>
    <View>
 
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:-30
        }}>
        <Image source={require('./../assets/images/laptopGirlWhite_001.png')}
            style={{
                width:400,
                height:420,
                borderRadius:20,
                objectFit: 'contain'
              }}
        />
        </View>

        <View style={styles.subContainer}>
            <Text style={{
                marginTop:30,
                fontSize:30,
                fontFamily:'outfit-bold',
                textAlign:'center'
            }}>Your Ultimate 
                <Text style={{
                    color:Colors.PRIMARY,
                }}> UI UX Design</Text> App</Text>
            <Text style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginVertical:15,
                marginBottom:60,
                color:Colors.GRAY
            }}>Find your favorite business near your and post your own business to your community</Text>

            <TouchableOpacity style={styles.btn} 
            onPress={onPress}
            >
                <Text style={{
                    textAlign:'center',
                    color:'#fff',
                    fontFamily:'outfit'
                }} >Let's Get Started</Text>
            </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    subContainer:{
        backgroundColor:'#ffffff',
        padding:20,
        marginTop:-20,
        
    },
    btn:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        borderRadius:99,
        marginTop:20
    }
})