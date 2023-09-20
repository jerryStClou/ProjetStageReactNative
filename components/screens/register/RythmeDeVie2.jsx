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

const RythmeDeVie2 = ()=>{

    return(
        <ImageBackground  
         style={styles.containerRythmeDeVie2}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View style={styles.viewRythmeDeVie2Style}>
         <Text style={styles.textRythmeDeVie2Style}>VOTRE RYTHME DE VIE ?</Text>
        </View>
        
        <TouchableOpacity style={styles.boutonRythmeDeVie2Style2}>
            <Text style={styles.textRythmeDeVie2Style1}>Petit déjeuner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonRythmeDeVie2Style2}>
            <Text style={styles.textRythmeDeVie2Style2}>Brunch</Text>
        </TouchableOpacity>

 
        <TouchableOpacity style={styles.boutonRythmeDeVie2Style2}>
          <Text style={styles.textRythmeDeVie2Style2}>Déjeuner</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boutonRythmeDeVie2Style2}>
            <Text style={styles.textRythmeDeVie2Style2}>Afterwork</Text>
        </TouchableOpacity>

        
        
        <TouchableOpacity style={styles.boutonRythmeDeVie2Style2}>
            <Text style={styles.textRythmeDeVie2Style2}>Diner</Text>
        </TouchableOpacity>


            <View style={styles.viewRythmeDeVie2Style2}>
                <Text style={styles.textRythmeDeVie2Style4}>Choix unique</Text>
            </View>
            <TouchableOpacity style={styles.continuerRythmeDeVie2Style}>
                <Text style={styles.textRythmeDeVie2Style5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default RythmeDeVie2

const styles = StyleSheet.create({
    
    containerRythmeDeVie2:{
        width:"100vw",
        height:"100vh",
        },
    viewRythmeDeVie2Style:{
        marginTop:122,
        marginBottom:99
    },
    textRythmeDeVie2Style:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonRythmeDeVie2Style:{
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
    boutonRythmeDeVie2Style2:{
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
    textRythmeDeVie2Style1:{
        fontSize:16
    },
    textRythmeDeVie2Style2:{
        fontSize:18
    },
    textRythmeDeVie2Style3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewRythmeDeVie2Style2:{
        marginLeft:50,
        marginTop:103
    },
    textRythmeDeVie2Style4:{
        fontSize:12
    },
    continuerRythmeDeVie2Style:{
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
    textRythmeDeVie2Style5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})