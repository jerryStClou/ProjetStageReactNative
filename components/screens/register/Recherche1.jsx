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

const Recherche1 = ()=>{

    return(
        <ImageBackground  
         style={styles.containerRecherche1}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View style={styles.viewRecherche1Style}>
         <Text style={styles.textRecherche1Style}>VOTRE RECHERCHE ?</Text>
        </View>
        <TouchableOpacity style={styles.boutonRecherche1Style}>
            <Text style={styles.textRecherche1Style2}>Homme</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boutonRecherche1Style2}>
            <Text style={styles.textRecherche1Style2}>Femme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonRecherche1Style2}>
            <Text style={styles.textRecherche1Style2}>Tout le monde</Text>
        </TouchableOpacity>

            <View style={styles.viewRecherche1Style2}>
                <Text style={styles.textRecherche1Style4}>Choix unique</Text>
            </View>
            <TouchableOpacity style={styles.continuerRecherche1Style}>
                <Text style={styles.textRecherche1Style5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default Recherche1

const styles = StyleSheet.create({
    
    containerRecherche1:{
        width:"100vw",
        height:"100vh",
        },
    viewRecherche1Style:{
        marginTop:122,
    },
    textRecherche1Style:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonRecherche1Style:{
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
    boutonRecherche1Style2:{
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
    textRecherche1Style2:{
        fontSize:18
    },
    textRecherche1Style3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewRecherche1Style2:{
        marginLeft:50,
        marginTop:235
    },
    textRecherche1Style4:{
        fontSize:12
    },
    continuerRecherche1Style:{
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
    textRecherche1Style5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})