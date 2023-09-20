import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,StyleSheet
} from 'react-native';
import Styles from '../../../assets/style/Styles';

const Taille = () =>{
     return(
        
        <ImageBackground  
        style={styles.containerTaille}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
        >
            <Text>Hello</Text>
        </ImageBackground>
     )
}
export default Taille ;


const styles = StyleSheet.create({
    containerTaille:{
        width:"100vw",
        height:"100vh",
    }
     
})