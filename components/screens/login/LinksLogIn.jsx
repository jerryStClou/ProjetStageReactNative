import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,StyleSheet
} from 'react-native';
import Styles from '../../../assets/style/Styles';
import Logo from '../../composants/Logo';
import { LinearGradient } from 'expo-linear-gradient';


const LinksLogIn = ()=>{
      return(
        <View style={[styles.container]}>
            <LinearGradient
                style={styles.bgGradient}
                colors={['rgb(175,146,255)', 'rgba(202,187,254,1)', 'rgba(209,240,247,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.35, 1]}
            >
                <View style={styles.viewLogo}>
                  <Logo />
                </View>
                
                <View style={[styles.ViewText2]}>
                   <View style={styles.ViewStyleText}>
                        <Text style={[styles.textWhite]}>
                           UN COUP DE COEUR
                       </Text>
                       <Text style={[styles.textWhite]}>
                           N'ATTEND PAS
                       </Text>
                   </View>

                   
                   <View style={styles.ViewStyleText}>
                        <Text style={[styles.textWhite2]}>
                             PROVOQUEZ LE
                       </Text>
                       <Text style={[styles.textWhite2]}>
                            DESTIN, LANCEZ-VOUS!
                       </Text>
                   </View>
                </View>

                <View style={[Styles.ViewBtnLog]}>
                   <View>
                       <TouchableOpacity
                         style={styles.BoutonMail}
                        //  onPress={() => {
                        //  setButtonPressed('Apple');
                        //  navigation.navigate('Tabs', {routeName: 'Se connecter'});
                        //  }}
                        //  accessibilityLabel="Connexion avec Apple"
                         >
                            <Text
                              style={[
                                 Styles.textBtn10,
                                 {
                                   zIndex: 1,
                                   fontSize: 18,
                                   fontFamily: 'Comfortaa-Bold',
                                 },
                               ]}>
                                @ S'inscrire par email
                            </Text>
                      </TouchableOpacity>
                   </View>
                </View>
            </LinearGradient>
        </View>
      )
}
export default LinksLogIn;

const styles = StyleSheet.create({
    container: {
        with:"100vw",
        height:"100vh",

    },
    bgGradient:{
        resizeMode: 'contain',
        with:"100%",
        height:"100%"
    },
    viewLogo:{
        // backgroundColor:"blue",
        width:"100vw",
        height:"15vh"
    },
    ViewText2:{
        // backgroundColor:"green",
        width:"70%",
        marginLeft:"10%"
    },
    ViewStyleText:{
         marginBottom:"5%"
    },
    textWhite:{
        color:"black",
        fontSize:"22px",
        fontFamily: 'Comfortaa-Bold',
        fontWeight:"bold"
    },
    textWhite2:{
        fontFamily: 'Comfortaa-Bold',
        fontSize:"22px",
    },
    ViewBtnLog:{
        backgroundColor:"red"
    },
    BoutonMail:{
        backgroundColor:"black"
    }
})