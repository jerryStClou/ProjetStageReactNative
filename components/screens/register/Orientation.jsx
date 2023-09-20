import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,StyleSheet
} from 'react-native';
import Styles from '../../../assets/style/Styles';
// import { BtnNext } from '../../composants/BtnNext';

const Orientation = ()=>{

    return(
        <ImageBackground  
         style={styles.containerOrientation}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View style={styles.viewOrientationStyle}>
         <Text style={styles.textOrientationStyle}>VOTRE ORIENTATION ?</Text>
        </View>
        <TouchableOpacity style={styles.boutonOrientationStyle}>
            <Text style={styles.textOrientationStyle2}>hétérosexuel.le</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boutonOrientationStyle2}>
            <Text style={styles.textOrientationStyle2}>Homosexuel.le</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonOrientationStyle2}>
            <Text style={styles.textOrientationStyle2}>Bisexuel.le</Text>
        </TouchableOpacity>

            <View style={styles.viewOrientationStyle2}>
                <Text style={styles.textOrientationStyle4}>Choix unique</Text>
            </View>
            <TouchableOpacity style={styles.continuerOrientationStyle}>
                <Text style={styles.textOrientationStyle5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
export default Orientation;

const styles = StyleSheet.create({
    
    containerOrientation:{
        width:"100vw",
        height:"100vh",
        },
    viewOrientationStyle:{
        marginTop:122,
    },
    textOrientationStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonOrientationStyle:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:99,
        width:300,
        height:52,
        borderColor:"#0019A7",
        borderWidth:"1px",
        borderStyle:"solid",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    boutonOrientationStyle2:{
        marginLeft:46,
        marginBottom:16.36,
        width:300,
        height:52,
        borderColor:"#0019A7",
        borderWidth:"1px",
        borderStyle:"solid",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textOrientationStyle2:{
        fontSize:18
    },
    textOrientationStyle3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewOrientationStyle2:{
        marginLeft:50,
        marginTop:235
    },
    textOrientationStyle4:{
        fontSize:12
    },
    continuerOrientationStyle:{
        marginTop:51,
        marginLeft:36,
        width:331,
        height:56,
        borderRadius:50,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textOrientationStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})