import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const TiendaComps = (props) => {
  const [factura, setFactura] = useState([
    {
      Prenda: 'Camisola',
      Cantidad: 2,
      PrecioUnit: 15,
      PagoSinDesc: 30,
      Descuento: 0,
      TotalPago: 30
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Facturación tienda Mimi</Text>
      </View>
      <View style={styles.facturaContainer}>
        {
          factura.map((data, key) => {
            return(
              <>
                <Text key={key} style={styles.facturaDesc}>Tipo de ropa: {data.Prenda}</Text>
                <Text key={key} style={styles.facturaDesc}>Cantidad: {data.Cantidad}</Text>
                <Text key={key} style={styles.facturaDesc}>Precio unitario: ${data.PrecioUnit}</Text>
                <Text key={key} style={styles.facturaDesc}>Total sin descuento: ${data.PagoSinDesc}</Text>
                <Text key={key} style={styles.facturaDesc}>Descuento aplicado: ${data.Descuento}</Text>
                <Text key={key} style={styles.facturaDescTotal}>Total a pagar: ${data.TotalPago}</Text>
              </>
            )
          })
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
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
