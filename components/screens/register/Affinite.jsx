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

const Affinite = ()=>{

    return(
        <ImageBackground  
         style={styles.containerAffinite}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View style={styles.viewAffiniteStyle}>
         <Text style={styles.textAffiniteStyle}>VOTRE AFFINITÉS ?</Text>
        </View>
        
        <TouchableOpacity style={styles.boutonAffiniteStyle2}>
            <Text style={styles.textAffiniteStyle1}>Amatrice de cuisine & gourmet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boutonAffiniteStyle2}>
            <Text style={styles.textAffiniteStyle2}>Globe trotter.euse</Text>
        </TouchableOpacity>

 
        <TouchableOpacity style={styles.boutonAffiniteStyle2}>
          <Text style={styles.textAffiniteStyle2}>Fan de musée & de culture</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boutonAffiniteStyle2}>
            <Text style={styles.textAffiniteStyle2}>Amis des animaux</Text>
        </TouchableOpacity>

        
        
        <TouchableOpacity style={styles.boutonAffiniteStyle2}>
            <Text style={styles.textAffiniteStyle2}>Sportif.ve</Text>
        </TouchableOpacity>


            <View style={styles.viewAffiniteStyle2}>
                <Text style={styles.textAffiniteStyle4}>Choix unique</Text>
            </View>
            <TouchableOpacity style={styles.continuerAffiniteStyle}>
                <Text style={styles.textAffiniteStyle5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default Affinite

const styles = StyleSheet.create({
    
    containerAffinite:{
        width:"100vw",
        height:"100vh",
        },
    viewAffiniteStyle:{
        marginTop:122,
        marginBottom:99
    },
    textAffiniteStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonAffiniteStyle:{
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
    boutonAffiniteStyle2:{
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
    textAffiniteStyle1:{
        fontSize:16
    },
    textAffiniteStyle2:{
        fontSize:18
    },
    textAffiniteStyle3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewAffiniteStyle2:{
        marginLeft:50,
        marginTop:103
    },
    textAffiniteStyle4:{
        fontSize:12
    },
    continuerAffiniteStyle:{
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
    textAffiniteStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})