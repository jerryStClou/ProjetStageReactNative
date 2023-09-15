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
    const [radio1, setRadio1] = useState(false);
    const [radio2, setRadio2] = useState(true);

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
            <LinearGradient
                style={styles.bgGradient}
                colors={['rgb(175,146,255)', 'rgba(202,187,254,1)', 'rgba(209,240,247,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.35, 1]}
            >
               <Logo />
               <View style={styles.ViewText}>
                   <Text style={[styles.textWhite, {top: -100, left: 30, fontSize:24}]}>
                       LOVE COACH
                    </Text>
                    <Text style={[styles.textWhite2, {top: 30, right:500,width: '20%', height: 230,   alignSelf:'center', fontSize:15}]}>Nous sommes heureux de vous       accompagner pour augmenter vos chances
                    de matchs. En choisissant le programme gratuit LOVE COACH, nous vous
                    proposerons des profils personnalisés de célibataires correspondant
                    à vos attentes. Vous recevrez également des invitations aux
                    événements près de chez vous et/ou dans la ville de votre choix.
                   </Text>
               </View>
               <View style={[styles.ViewRadio, styles.ml40, {top: 100}]}>
                    {/* ----------Radio Input -------- */}
                    <TouchableOpacity style={[styles.radioInputContainer, {alignItems:'center'}]} onPress={() => checkoutRadio1()}>
                       <Image 
                        source={radio1 === true ? require('../../../assets/images/radio_selected.png') :  require('../../../assets/images/radio_unselected.png')}
                        style={styles.radioInputIcon}
                        />
                        <Text style={[styles.textWhite6, {fontSize:13, marginBottom:10}]}>Non, je peux me débrouiller</Text>
                    </TouchableOpacity>

                     <TouchableOpacity style={[styles.radioInputContainer, {alignItems:'center'}]} onPress={() => checkoutRadio2()}>
                       <Image 
                        source={radio2 === true ? require('../../../assets/images/radio_selected.png') :  require('../../../assets/images/radio_unselected.png')}
                        style={styles.radioInputIcon}
                        />
                        <Text style={[styles.textWhite6, {fontSize:13, marginBottom:10}]}>Oui, c'est parfait</Text>
                    </TouchableOpacity> 
                    {/* ----------/Radio Input -------- */}
               </View>
            </LinearGradient>

        </View>
    )
}

export default LoveCoach;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      bgGradient: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
      },
      ViewText: {
        flex: 1,
      },
      textWhite: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Comfortaa-Bold',
      },
      textWhite2: {
        color: '#fff',
        fontSize: 18,
        width: '90%',
        height: 200,
        fontFamily: 'Comfortaa',
      },
      ViewRadio: {
        flex: 3,
        marginTop: 200,
        marginLeft: 20,
      },
      ml40: {
        marginLeft: 40,
      },
      
  radioInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioInputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textWhite6: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Comfortaa',
  },
  });