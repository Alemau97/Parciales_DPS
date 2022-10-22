import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Modal, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TiendaComps } from '../components/TiendaComps';
import { FormStore } from '../components/FormStore';


export const Tienda = () => {

  const [ropaValue, setRopaValue] = useState('');
  const [sendCant, setSendCant] = useState(0);
  const [costo, setCosto] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);

  const [mostrarFact, setMostrarFact] = useState(false);
  const [modal, setModal] = useState(false);

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

  //setFactura([...factura, RecogerDatos]);

  return (
    <>
      <FormStore 
        valorPicker={ropaValue}
        setValuePicker={setRopaValue}
        costosPicker={setCosto}
        inputValue={sendCant}
        setCantInput={setSendCant}
        costoRopa={costo}
        setFact={setFactura}
        nuevosDatos = {RecogerDatos}
        fact={factura}
      />
      <Pressable
        onPress={()=>{
          setModal(!modal);
          setMostrarFact(!mostrarFact);
        }}
        style={styles.mostrar}
      >
        <Text style={{color: 'white', textAlign: 'center', padding: 2}}>Ver factura</Text>
      </Pressable>
      <View>
        <Modal
          animationType='fade'
          transparent={false}
          visible={modal}
          onRequestClose={()=>{
            setModal(!modal)
          }}
        >
          {
            mostrarFact ? (
            <>
              {
                factura.map((data,key)=>{
                return(
                  <TiendaComps 
                    key={key}
                    Prenda={data.Prenda}
                    Cantidad={data.Cantidad}
                    PrecioUnit={data.PrecioUnit}
                    PagoSinDesc={data.PagoSinDesc}
                    Descuento={data.Descuento}
                    TotalPago={data.TotalPago}
                  />
                  )
                })
              }
            </>
            ) : (
              <>
                <View></View>
              </>
            )
          }
          <Pressable
            onPress={()=>{
              setModal(!modal);
              setMostrarFact(!mostrarFact);
            }}
            style={styles.mostrar}
          >
            <Text style={{color: 'white', textAlign: 'center', padding: 2}}>Nueva compra</Text>
          </Pressable>
        </Modal>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mostrar: {
    backgroundColor: '#122b44',
    padding: 10,
  }
})
