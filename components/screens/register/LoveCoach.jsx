import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import Logo from '../../composants/Logo';
import Styles from '../../../assets/style/Styles';
import { LinearGradient } from 'expo-linear-gradient';


const LoveCoach = ({route, navigation}) => {
    // const [selectedOption, setSelectedOption] = useState(false);
    // const routeChoice = route.params?.routeName ?? '';
    // const consentement = route.params?.userConsent ?? '';

    const [radio1, setRadio1] = useState(false);
    const [radio2, setRadio2] = useState(true);
    const [buttonPressed, setButtonPressed] = useState();

    const checkoutRadio1 = ()=>{
      // setRadio1(!radio1)
      if(radio1 === false && radio2 === false)
      {
          setRadio2(false);
          setRadio1(true);
      }
      if(radio1 === true && radio2 === false)
      {
        setRadio2(false);
        setRadio1(true);
      }
      if(radio1 === false && radio2 === true)
      {
        setRadio2(false);
        setRadio1(true);
      }
    }

    
    const checkoutRadio2 = ()=>{
      // setRadio1(!radio2)
      if(radio2 === false && radio1 === false)
      {
          setRadio1(false);
          setRadio2(true);
      }
      if(radio2 === true && radio1 === false)
      {
        setRadio1(false);
        setRadio2(true);
      }
      if(radio2 === false && radio1 === true)
      {
        setRadio1(false);
        setRadio2(true);
      }
    }


    return(
        <View style={styles.container}>
          <ImageBackground
                style={styles.bgGradient}
                source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
            >
              <View style={styles.divLogo}>
                 <Logo />
              </View>
              
              <View style={styles.ViewText}>
              <Text style={styles.textWhite}>
                       LOVE COACH
                    </Text>
                    <Text style={styles.textWhite2}>Nous sommes heureux de vous       accompagner pour augmenter vos chances
                    de matchs. En choisissant le programme gratuit LOVE COACH, nous vous
                    proposerons des profils personnalisés de célibataires correspondant
                    à vos attentes. Vous recevrez également des invitations aux
                    événements près de chez vous et/ou dans la ville de votre choix.
                   </Text>
              </View>




              <View style={[styles.ViewRadio]}>
                   
                    <TouchableOpacity style={[styles.radioInputContainer]} onPress={() => checkoutRadio1()}>
                       <Image 
                        source={radio1 === true ? require('../../../assets/images/radio_selected.png') :  require('../../../assets/images/radio_unselected.png')}
                        style={styles.radioInputIcon}
                        />
                        <Text style={[styles.textWhite6]}>Non, je peux me débrouiller</Text>
                    </TouchableOpacity>

                     <TouchableOpacity style={[styles.radioInputContainer]} onPress={() => checkoutRadio2()}>
                       <Image 
                        source={radio2 === true ? require('../../../assets/images/radio_selected.png') :  require('../../../assets/images/radio_unselected.png')}
                        style={styles.radioInputIcon}
                        />
                        <Text style={[styles.textWhite6]}>Oui, c'est parfait</Text>
                    </TouchableOpacity> 
               </View>




               <View style={styles.viewInfo}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Comfortaa',
                      fontSize: 15,
                      fontStyle: 'normal',
                      fontWeight: 100,
                      marginBottom: 20,
                    }}>
                      Création du compte gratuit.
                  </Text><Text
                    style={{
                      color: 'black',
                      fontFamily: 'Comfortaa',
                      fontSize: 15,
                      fontStyle: 'normal',
                      fontWeight: 100,
                      marginBottom: 20,
                    }}>
                        Choix unique.
                    </Text>
               </View>
               <View style={[styles.ViewBtn1]}>
                  <TouchableOpacity
                     style={styles.btn}
                    //  onPress={() => {
                    //   if (routeChoice === 'Se connecter') {
                    //     navigation.navigate('Liens de connexion', {
                    //       userConsent: consentement,
                    //       routeName: routeChoice,
                    //       LoveCoach: selectedOption,
                    //     });
                    //   } else {
                    //     navigation.navigate("Liens d'inscription", {
                    //       userConsent: consentement,
                    //       routeName: routeChoice,
                    //       loveCoach: selectedOption,
                    //     });
                    //   }
                    //   setButtonPressed(true);}}
                    //   accessibilityLabel="Continuer"
                  >
                    <Text
                     style={[
                       styles.textBtn9,
                       {zIndex: 1,  fontSize:18, color: buttonPressed ? 'blue' :  '#0019A7'},
                     ]}>
                         Continuer
                   </Text>
                  </TouchableOpacity>
               </View>
            </ImageBackground>
        </View>
    )
}

export default LoveCoach;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        width:"100vw",
        height:"100vh",
      },
      bgGradient: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
      },
      divLogo:{
        // backgroundColor:"red",
        height:"25vh"
      },
      ViewText: {
        // flex: 1,
        width:"90vw",
        // backgroundColor:"blue",
        marginLeft:"8%",
        height:"40vh"
      },
      textWhite: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Comfortaa-Bold',
        marginBottom:"5%"
      },
      textWhite2: {
        color: 'black',
        fontSize: 18,
        width: '90%',
        height: 200,
        fontFamily: 'Comfortaa',
      },
      ViewRadio: {
      //   flex: 3,
        marginTop: 2,
      //   marginLeft: 20,
      // backgroundColor:"green",
      marginLeft:"8%"

      },
      ml40: {
        marginLeft: 40,
      },
      
  radioInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:15
  },
  radioInputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textWhite6: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Comfortaa',
  },
  viewInfo:{
    // backgroundColor:"pink",
    marginLeft:"8%",
    marginTop:"8%"
  },
  ViewBtn1: {
    backgroundColor:"white",
    height:"5vh",
    width:"80%",
    marginLeft:"10%",
    marginTop:"10%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50
  },
  btn:{},
  textBtn9: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
  },
  });