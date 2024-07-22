import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';

export default function home() {
  return (
    <SafeAreaView>
    <View>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Category */}

      {/* Popular Business List */}
    </View>
    </SafeAreaView>
  )
}