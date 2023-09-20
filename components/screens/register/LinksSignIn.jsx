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


const LinksSignIn = ()=>{

//   const routeChoice = route.params?.routeName ?? '';
//   const consentement = route.params?.userConsent ?? '';
//   const loveCoach = route.params?.loveCoach ?? '';
//   console.log('Choix de route : ', routeChoice);
//   console.log('Consentement : ', consentement);


const [buttonPressed, setButtonPressed] = useState();

       return(
        
        <ImageBackground
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
        style={styles.container}
        >
             <View style={styles.ViewLogo}>
                <Logo/>
            </View>
           <View style={styles.ViewText2}>
             <Text style={[styles.textStyle1]}>
               UN COUP DE COEUR
             </Text>
             <Text style={[styles.textStyle1]}>
               PROVOQUER LE
             </Text>
             <Text style={[styles.textStyle2]}>
               DESTIN, LANCEZ-VOUS!
             </Text>
           </View>

           {/* <View style={[styles.boutonInscription]}> */}
            <TouchableOpacity 
            style={[styles.boutonInscription]}
            accessibilityLabel="Se connecter par email"
            onPress={() => {
              navigation.navigate("S'inscrire par mail", {
                userConsent: consentement,
                routeName: "S'inscrire par mail",
                loveCoach: loveCoach,
              });
              setButtonPressed('mail');
            }}
            >
                <View style={[styles.imageView]}>
                     <Image
                        source={require('../../../assets/imagesSvg/arroba 2.png')}
                        style={styles.imageStyle}
                     />
                </View>
              <View style={[styles.textView]}>
                <Text style={[styles.textStyle3]}>s'inscrire par mail</Text>
              </View>
            </TouchableOpacity>
           {/* </View> */}
           <TouchableOpacity style={[styles.boutonInscription,{marginTop: "13px"}]}
           onPress={() => {
            navigation.navigate("S'inscrire par numero", {
              userConsent: consentement,
              routeName: "S'inscrire par numero",
              loveCoach: loveCoach,
            });
            setButtonPressed('numero');
          }}
          accessibilityLabel="Se connecter avec son numéro de téléphone"
           >
                <View style={[styles.imageView]}>
                     <Image
                        source={require('../../../assets/imagesSvg/telephone 1.png')}
                        style={styles.imageStyle}
                     />
                </View>
              <View style={[styles.textView]}>
                <Text style={[styles.textStyle3]}>S'inscrire avec son n</Text>
              </View>
            </TouchableOpacity>

            <View style={[styles.textView2]}>
                <Text style={[styles.textStyle4]}>Vous avez deja un compte?</Text>
            </View>
            <TouchableOpacity style={[styles.connection]}
            onPress={() =>
                navigation.navigate('Liens de connexion', {
                  userConsent: consentement,
                  routeName: routeChoice,
                  loveCoach: loveCoach,
                })
              }
              accessibilityLabel="Se connecter"
            >
                <Text style={[styles.textStyle5]}>Se connecter</Text>
            </TouchableOpacity>

            <View style={[styles.viewStyle]}></View>
            <TouchableOpacity style={[styles.compte]}
            onPress={() =>
                navigation.navigate('Recuperation email', {
                  userConsent: consentement,
                  routeName: 'Recuperation de compte',
                  loveCoach: loveCoach,
                })
              }
              accessibilityLabel="Récupération email"
            >
                <Text style={[styles.textStyle6]}>Récupérer mon compte</Text>
            </TouchableOpacity>

        </ImageBackground>
       )
}

export default LinksSignIn;

const styles = StyleSheet.create({
    container: {
        width:"100vw",
        height:"100vh",
      },
      ViewLogo:{
        // backgroundColor:"blue"
      },
    ViewText2:{
        // backgroundColor:"green",
        width:305,
        height:144,
        marginTop:95,
        marginLeft:33
      },
    textStyle1: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Comfortaa',
    fontWeight:"bold"
  },
  textStyle2:{
    fontSize: 24,
    fontFamily: 'Comfortaa',
  },
  boutonInscription:{
    backgroundColor:"black",
    width:331,
    height:56,
    borderRadius:50,
    marginLeft:33,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  textView:{
    // backgroundColor:"pink",
    marginLeft:"17px",
    width:255
  },
  textStyle3:{
    color:"white",
    fontSize:20
  },
  imageView:{
    // backgroundColor:"green",
    width:28,
    height:28
  },
  imageStyle:{
     width:28,
     height:28
  },
  textView2:{
    // backgroundColor:"red",
    marginTop:"20px"
  },
  connection:{
    // backgroundColor:"blue"
},

textStyle4:{
    margin:"auto",
    fontSize:"17px"
},
textStyle5:{
    margin:"auto",
    fontSize:"17px",
    textDecorationLine:"underline",

},
textStyle6:{
    margin:"auto",
    textDecorationLine:"underline",
    color:"#0019A7",
    fontSize:"17px"
},

  viewStyle:{
    // backgroundColor:"pink"
    borderTopColor:"black",
    borderTopWidth:"2px",
    width:298,
    marginLeft:49,
    marginTop:15,
    marginBottom:15

},
  compte:{
    // backgroundColor:"purple"
},
})