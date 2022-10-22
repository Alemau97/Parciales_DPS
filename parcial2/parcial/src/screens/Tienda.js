import React, { useState, useEffect } from 'react';
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

export const Tienda = () => {

  const [ropaValue, setRopaValue] = useState('');
  const [sendCant, setSendCant] = useState(0);
  const [costo, setCosto] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);

  let precios = Math.round(costo * sendCant);
  let descuentos;
  let totals;

  useEffect(() => {
    
    setPrecio(precios);
    setDescuento(descuentos);
    setTotal(totals);

  }, [precios, descuentos, totals])

  if(sendCant >= 15 && sendCant <= 49){
    descuentos = precios * 0.05;
    totals = precios - descuentos;
  }else if(sendCant >= 50 && sendCant <= 79){
    descuentos = precios * 0.13;
    totals = precios - descuentos;
  }else if(sendCant >= 80){
    descuentos = precios * 0.25;
    totals = precios - descuentos;
  }else{
    descuentos = 0;
    totals = precios - descuentos;
  }

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

  const RecogerDatos = {
    Prenda: ropaValue,
    Cantidad: sendCant,
    PrecioUnit: costo,
    PagoSinDesc: precio,
    Descuento: descuento,
    TotalPago: total
  };

  const pasoDatos = (shared) => {
    setFactura([...shared, RecogerDatos])
  }

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
          onValueChange={(itemValue, itemIndex)=>{
            setRopaValue(itemValue);
            if(itemValue==='Camiseta básica caballero'){
              setCosto(10.99);
            }else if(itemValue==='Camisa formal caballero'){
              setCosto(20);
            }else if(itemValue==='Camisa tipo polo caballero'){
              setCosto(15);
            }else if(itemValue==='Blusa básica'){
              setCosto(10.99);
            }else if(itemValue==='Blusa estampada'){
              setCosto(17);
            }else if(itemValue==='Camiseta dama'){
              setCosto(15);
            }else if(itemValue==='Jeans'){
              setCosto(35.99)
            }else if(itemValue==='Pants jogger'){
              setCosto(30.99)
            }else if(itemValue==='Short'){
              setCosto(25.99)
            }else if(itemValue==='Sneakers caballero'){
              setCosto(50.99)
            }else if(itemValue==='Sneakers Dama'){
              setCosto(50.99)
            }else{
              setCosto(0);
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
          value={sendCant}
          onChangeText={(value)=>setSendCant(value)}
          style={styles.numberKeyboard}
        />
        <Text style={styles.descp}>Precio c/u ($): </Text>
        <Text style={styles.descp}>{costo}</Text>
        <View>
          <Button   
            title='Facturar'
            style={styles.button}
            onPress={() => {
              setSendCant('');
              setRopaValue('');
              setCosto(0);
              setFactura([...factura, RecogerDatos]);
              alert('Factura generada');
            }}
          />
        </View>
      </View>
      <ScrollView>
      {
        factura.map((data,key)=>{
          return(
            <TiendaComps 
              Prenda={data.Prenda}
              Cantidad={data.Cantidad}
              PrecioUnit={data.PrecioUnit}
              PagoSinDesc={data.PagoSinDesc}
              Descuento={data.Descuento}
              TotalPago={data.TotalPago}
              key={key}
            />
          )
        })
      }
      </ScrollView>
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