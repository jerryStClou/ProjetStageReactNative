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

const Situation = ()=>{
    return(
        <ImageBackground  
         style={styles.containerSituation}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            
            <View style={styles.viewSituationStyle}>
             <Text style={styles.textSituationStyle}>VOTRE SITUATION</Text>
             <Text style={styles.textSituationStyle}>ACTUELLE?</Text>
            </View>
            <TouchableOpacity style={styles.boutonSituationStyle}>
                <Text style={styles.textSituationStyle2}>Célibataire</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boutonSituationStyle2}>
                <Text style={styles.textSituationStyle2}>Séparé.e</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.boutonSituationStyle2}>
                <Text style={styles.textSituationStyle2}>Divorcé.e</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boutonSituationStyle2}>
                <Text style={styles.textSituationStyle2}>Veuf.ve</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.boutonSituationStyle2}>
                <Text style={styles.textSituationStyle2}>C'est compliqué</Text>
            </TouchableOpacity>

<View style={styles.viewSituationStyle2}>
    <Text style={styles.textSituationStyle4}>Choix unique</Text>
</View>
<TouchableOpacity style={styles.continuerSituationStyle}>
    <Text style={styles.textSituationStyle5}>Continuer</Text>
</TouchableOpacity>

        </ImageBackground>
    )

}
export default Situation;


const styles = StyleSheet.create({
    containerSituation:{
        width:"100vw",
        height:"100vh"
    },
    viewSituationStyle:{
        marginTop:122,
    },
    textSituationStyle:{
        fontSize:24,
        // fontWeight:"bold",
        margin:"auto"
    },
    boutonSituationStyle:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:50,
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
    boutonSituationStyle2:{
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
    textSituationStyle2:{
        fontSize:18
    },
    viewSituationStyle2:{
        marginLeft:50,
        marginTop:99
    },
    textSituationStyle4:{
        fontSize:12
    },
    continuerSituationStyle:{
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
    textSituationStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }

})