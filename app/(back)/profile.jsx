import { View, Text, Image,ScrollView } from 'react-native'
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Home/Header'
import ProfileContent from '../../components/Profile/ProfileContent';


// import Category from '../../components/Home/Category'



export default function profile() {
  return (
    <ScrollView>
    {/* Header  */}
    <Header/>

    <ProfileContent />


   
    </ScrollView>
    
  )
}




