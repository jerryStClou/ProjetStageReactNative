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

const Objectifs = ()=>{

    return(
        <ImageBackground  
         style={styles.containerObjectifs}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View style={styles.viewObjectifsStyle}>
         <Text style={styles.textObjectifsStyle}>VOTRE OBJECTIFS ?</Text>
        </View>
        <TouchableOpacity style={styles.boutonObjectifsStyle}>
            <Text style={styles.textObjectifsStyle2}>Relation amoureuse</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boutonObjectifsStyle2}>
            <Text style={styles.textObjectifsStyle2}>Cercle d'ami.es</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonObjectifsStyle2}>
            <Text style={styles.textObjectifsStyle2}>Développer votre réseaux</Text>
            <Text style={styles.textObjectifsStyle2}>professionnel</Text>
        </TouchableOpacity>

            <View style={styles.viewObjectifsStyle2}>
                <Text style={styles.textObjectifsStyle4}>Choix unique</Text>
            </View>
            <TouchableOpacity style={styles.continuerObjectifsStyle}>
                <Text style={styles.textObjectifsStyle5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default Objectifs

const styles = StyleSheet.create({
    
    containerObjectifs:{
        width:"100vw",
        height:"100vh",
        },
    viewObjectifsStyle:{
        marginTop:122,
    },
    textObjectifsStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonObjectifsStyle:{
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
    boutonObjectifsStyle2:{
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
    textObjectifsStyle2:{
        fontSize:18
    },
    textObjectifsStyle3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewObjectifsStyle2:{
        marginLeft:50,
        marginTop:235
    },
    textObjectifsStyle4:{
        fontSize:12
    },
    continuerObjectifsStyle:{
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
    textObjectifsStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})