import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Parcial práctico 2 - DPS</Text>
        <Text style={{color: 'white', fontSize: 18, paddingTop: 15, paddingBottom: 15}}>Integrantes:</Text>
        <Text style={styles.integ}>Mauricio Alejandro Martínez Nerio MN190349</Text>
        <Text style={styles.integ}>Carlos Emerson Portillo Martínez PM191144</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15
  },
  integ: {
    fontSize: 16,
    color: 'white',
    padding: 5,
    textAlign: 'justify',
  }
})