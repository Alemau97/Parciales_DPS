import React, { useState, useEffect, createFactory } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TiendaComps } from '../components/TiendaComps';

const ropa = [
  {
    nombre: '',
    valor: '',
  },
  {
    nombre: 'Camiseta básica caballero',
    valor: 'Camiseta básica caballero',
  },
  {
    nombre: 'Camisa formal caballero',
    valor: 'Camisa formal caballero',
  },
  {
    nombre: 'Camisa tipo polo caballero',
    valor: 'Camisa tipo polo caballero',
  },
  {
    nombre: 'Blusa básica',
    valor: 'Blusa básica',
  },
  {
    nombre: 'Blusa estampada',
    valor: 'Blusa estampada',
  },
  {
    nombre: 'Camiseta dama',
    valor: 'Camiseta dama',
  },
  {
    nombre: 'Jeans',
    valor: 'Jeans',
  },
  {
    nombre: 'Pants jogger',
    valor: 'Pants jogger',
  },
  {
    nombre: 'Short',
    valor: 'Short',
  },
  {
    nombre: 'Sneakers caballero',
    valor: 'Sneakers caballero',
  },
  {
    nombre: 'Sneakers Dama',
    valor: 'Sneakers Dama',
  },
];

export const FormStore = (props) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tienda Mimi</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.descp}>Ropa: </Text>
        <Picker
          style={styles.picker}
          selectedValue={props.valorPicker}
          onValueChange={(itemValue, itemIndex)=>{
            props.setValuePicker(itemValue);
            if(itemValue==='Camiseta básica caballero'){
              props.costosPicker(10.99);
            }else if(itemValue==='Camisa formal caballero'){
              props.costosPicker(20);
            }else if(itemValue==='Camisa tipo polo caballero'){
              props.costosPicker(15);
            }else if(itemValue==='Blusa básica'){
              props.costosPicker(10.99);
            }else if(itemValue==='Blusa estampada'){
              props.costosPicker(17);
            }else if(itemValue==='Camiseta dama'){
              props.costosPicker(15);
            }else if(itemValue==='Jeans'){
              props.costosPicker(35.99)
            }else if(itemValue==='Pants jogger'){
              props.costosPicker(30.99)
            }else if(itemValue==='Short'){
              props.costosPicker(25.99)
            }else if(itemValue==='Sneakers caballero'){
              props.costosPicker(50.99)
            }else if(itemValue==='Sneakers Dama'){
              props.costosPicker(50.99)
            }else{
              props.costosPicker(0);
            }
          }}
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
          value={props.inputValue}
          onChangeText={(value)=>props.setCantInput(value)}
          style={styles.numberKeyboard}
        />
        <Text style={styles.descp}>Precio c/u ($): </Text>
        <Text style={styles.descp}>{props.costoRopa}</Text>
        <View>
          <Button   
            title='Facturar'
            style={styles.button}
            onPress={() => {
              if(props.valorPicker ==  '' || props.inputValue == 0){
                alert('No puede haber campos vacíos')
              }else{
                props.setCantInput('');
                props.setValuePicker('');
                props.costosPicker(0);
                //setFactura([...factura, RecogerDatos]);
                props.setFact([...props.fact, props.nuevosDatos])
                alert('Factura generada');
              }
            }}
          />
        </View>
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