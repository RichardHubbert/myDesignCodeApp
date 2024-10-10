import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, Image } from 'react-native'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'

export default function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    try {
      const q = query(collection(db, 'users'))
      const querySnapshot = await getDocs(q)
      const usersList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setUsers(usersList)
    } catch (error) {
      console.error("Error fetching users: ", error)
      setError('Failed to fetch users. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const renderUserItem = ({ item }) => {
    console.log(`Bio length for ${item.name}: ${item.bio ? item.bio.length : 0}`)
    return (
      <View style={styles.userItem}>
        {item.imageUrl ? (
          <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
        ) : (
          <View style={[styles.userImage, styles.placeholderImage]} />
        )}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name || 'No Name'}</Text>
          <ScrollView style={styles.bioScrollView}>
          <Text style={styles.userBio}>{item.bio || 'No Bio'}</Text>
          </ScrollView>
        </View>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
    height: 'auto', // Increased height
  },
  bioScrollView: {
    maxHeight: 500, // Set a maximum height for the bio
  },
  userImage: {
    width: '100%',
    height: 200, // Reduced height
    resizeMode: 'cover',
  },
  placeholderImage: {
    backgroundColor: '#cccccc',
  },
  userInfo: {
    padding: 20,
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userBio: {
    fontSize: 16,
    color: 'gray',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
})