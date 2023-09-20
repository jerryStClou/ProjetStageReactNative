import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,StyleSheet
} from 'react-native';
// import {BtnNext} from '../../composants/BtnNext';
import Styles from '../../../assets/style/Styles';


const Ville = ()=>{
   return(
   <ImageBackground  
    style={styles.containerVille}
    source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
   >
    <View style={styles.viewVilleStyle}>
        <Text style={styles.textVilleStyle}>VOTRE VILLE ?</Text>
    </View>
    <View style={styles.boutonVilleStyle}>
        <Text style={styles.textVilleStyle2}>Entrez votre ville</Text>
    </View>
    <View style={styles.viewVilleStyle2}>
        <Text style={styles.textVilleStyle3}>Faites des rencontres locales</Text>
    </View>
          <TouchableOpacity style={styles.continuerVilleStyle}>
            <Text style={styles.TextVilleStyle4}>Continuer</Text>
          </TouchableOpacity>
    </ImageBackground>
   )
}

export default Ville;

const styles = StyleSheet.create({
    containerVille: {
        width:"100vw",
        height:"100vh",
      },
      viewVilleStyle:{
        marginTop:57,
        display:"flex",
        alignItems:"center"
      },
      textVilleStyle:{
        fontSize:24
      },
      boutonVilleStyle:{
        width:300,
        height:51,
        marginLeft:33,
        marginTop:170,
        borderColor:"black",
        borderWidth:"2px",
        borderStyle:"solid",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }, 
      textVilleStyle2:{
         fontSize:18,
         color:"#696969;"
      },
      viewVilleStyle2:{
        marginTop:151,
        marginLeft:38
      },
      textVilleStyle3:{
        fontSize:"13px"
      },
      continuerVilleStyle:{
         marginTop:201,
         marginLeft:36,
         width:331,
         height:56,
         borderRadius:50,
         backgroundColor:"white",
         display:"flex",
         justifyContent:"center",
         alignItems:"center"
      },
      TextVilleStyle4:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
      },
})