import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ropa = [
  {
    nombre: '',
    valor: 0,
  },
  {
    nombre: 'Camiseta básica caballero',
    valor: 10.00,
  },
  {
    nombre: 'Camisa formal caballero',
    valor: 25.00,
  },
  {
    nombre: 'Camisa tipo polo caballero',
    valor: 20.00,
  },
  {
    nombre: 'Blusa básica',
    valor: 10.99,
  },
  {
    nombre: 'Blusa estampada',
    valor: 15.99,
  },
  {
    nombre: 'Camiseta dama',
    valor: 24.99,
  },
  {
    nombre: 'Jeans',
    valor: 35.00,
  },
  {
    nombre: 'Pants jogger',
    valor: 30.00,
  },
  {
    nombre: 'Short',
    valor: 25.99,
  },
  {
    nombre: 'Sneakers caballero',
    valor: 50.00,
  },
  {
    nombre: 'Sneakers Dama',
    valor: 50.99,
  },
];

export const TiendaComps = () => {

  const [ropaValue, setRopaValue] = useState('');

  const [sendType, setSendType] = useState('');
  const [sendCant, setSendCant] = useState(0);

  const precio = ropaValue * sendCant ;
  const compra = (cantidad, precio) => {
    if(cantidad >= 15 && cantidad <= 49){
      precio * 0.50;
    }else{

    }
  }
  const [resumen, setResumen] = useState(['']);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tienda Mimi</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.descp}>Ropa: </Text>
        <Picker
          style={styles.picker}
          selectedValue={ropaValue}
          onValueChange={(itemValue, itemIndex)=>setRopaValue(itemValue)}
        >
          {
            ropa.map((ropa,key)=>{
              return(
                <Picker.Item 
                  label={ropa.nombre}
                  value={ropa.valor}
                  key={key}
                />
              )
            })
          }
        </Picker>
        <Text style={styles.descp}>Cantidad: </Text>
        <TextInput 
          placeholder='Ingrese la cantidad a comprar'
          keyboardType='numeric'
          value={sendCant}
          onChangeText={(value)=>setSendCant(value)}
          style={styles.numberKeyboard}
        />
        <Text style={styles.descp}>Precio c/u ($): </Text>
        <Text style={styles.descp}>{ropaValue}</Text>
        <View>
          <Button 
            onPress={()=>{
              alert(precio);
              setResumen(resumen.concat(precio));
              setSendCant('');
              setRopaValue('');
            }}
            title='Facturar'
            style={styles.button}
          />
        </View>
        {
          resumen.map((data,key)=>{
            return(
              <Text key={key}>{data}</Text>
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
  pickerContainer: {
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
  picker: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
  },
  descp: {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  numberKeyboard: {
    backgroundColor: 'white'
  }
})
