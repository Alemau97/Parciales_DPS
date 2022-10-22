import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const TiendaComps = (props) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.facturaContainer}>
        <Text style={styles.facturaDesc}>Tipo de ropa: {props.Prenda}</Text>
        <Text style={styles.facturaDesc}>Cantidad: {props.Cantidad}</Text>
        <Text style={styles.facturaDesc}>Precio unitario: ${props.PrecioUnit}</Text>
        <Text style={styles.facturaDesc}>Total sin descuento: ${props.PagoSinDesc}</Text>
        <Text style={styles.facturaDesc}>Descuento aplicado: ${props.Descuento}</Text>
        <Text style={styles.facturaDescTotal}>Total a pagar: ${props.TotalPago}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'teal'
  },
  titleContainer: {
    width: '100%',
    padding: 10,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  facturaContainer: {
    width: '80%',
    backgroundColor: '#122b44',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20
  },
  facturaDesc: {
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    padding: 2
  },
  facturaDescTotal: {
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    padding: 2,
    fontWeight: 'bold',
    backgroundColor: 'red'
  }
})
