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

const Genre = ()=>{
    return(
        <ImageBackground  
         style={styles.containerGenre}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View style={styles.viewGenreStyle}>
             <Text style={styles.textGenreStyle}>VOTRE GENRE</Text>
            </View>
            <TouchableOpacity style={styles.boutonGenreStyle}>
                <Text style={styles.textGenreStyle2}>Femme</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.boutonGenreStyle2}>
                <Text style={styles.textGenreStyle2}>Homme</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.boutonGenreStyle2}>
                <Text style={styles.textGenreStyle2}>Non Binaire</Text>
            </TouchableOpacity>

            <View style={styles.viewGenreStyle2}>
                <Text style={styles.textGenreStyle4}>Choix unique</Text>
            </View>
            <TouchableOpacity style={styles.continuerGenreStyle}>
                <Text style={styles.textGenreStyle5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Genre;


const styles = StyleSheet.create({
    containerGenre:{
    width:"100vw",
    height:"100vh",
    },
    viewGenreStyle:{
        marginTop:122,
    },
    textGenreStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonGenreStyle:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:101,
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
    boutonGenreStyle2:{
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
    textGenreStyle2:{
        fontSize:18
    },
    textGenreStyle3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewGenreStyle2:{
        marginLeft:50,
        marginTop:233
    },
    textGenreStyle4:{
        fontSize:12
    },
    continuerGenreStyle:{
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
    textGenreStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})