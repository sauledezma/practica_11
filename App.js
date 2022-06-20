import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
     const response = await fetch('https://reactnative.dev/movies.json'); 
     const json = await response.json(); 
     setData(json.movies)
   } catch (error) {
     console.error(error);
 }
}

useEffect(() => {
  getMovies();
}, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
     
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      
    </View>
  );

};