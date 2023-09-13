import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Image,StyleSheet
} from 'react-native';
import Logo from '../composants/Logo';
import Lottie from 'lottie-react-native';
import Styles from '../../assets/style/Styles';
import { LinearGradient } from 'expo-linear-gradient';
/* Screen 3 */


const CreationEtDeveloppement = ()=>{

  const [modalVisible, setModalVisible] = useState(false);


  //Constante permettant de savoir si l'utilisateur à appuyer sur Accepter ou sur Refuser
  const [consentement, setConsentement] = useState();
  const [buttonPressed, setButtonPressed] = useState(false);

    return(
        <View style={Styles.container}>
           <LinearGradient
           colors={['rgb(175,146,255)', 'rgba(202,187,254,1)', 'rgba(209,240,247,1)']}
           start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 0 }}
           locations={[0, 0.35, 1]}
          style={Styles.container}
        >
            <Logo />
            <View style={[Styles.ViewText, {top: -20, left: 10}]}>
            <Text
            style={[
              {
                color: 'black',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 500,
              },
            ]}>
            CRÉATION ET
          </Text>
          <Text
            style={[
              {
                color: 'black',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: 500,
              },
            ]}>
            DÉVELOPPEMENT.
          </Text>
        </View>

        {/* <View style={[styles.ViewVideo, {top: 0, height: 100, height: 100}]}>
          <Lottie
            source={require('../../assets/animations/Animation-credits.json')}
            autoPlay
            loop
          />
        </View> */}
         <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible(!modalVisible);
          }}>

            <View style={[Styles.centeredView5, {top: 200}]}>
              <ScrollView style={[{width: 400, alignSelf: 'center', top: -90}]}>
              <Text style={[Styles.textBlue3]}>CONSENTEMENT</Text>
              <Text style={[Styles.textBlue4]}>
                Nous respectons la vie privée de nos utilisateurs. Vos données,
                vos choix.{'\n'}MyBodyDate utilise des cookies et des
                informations non sensibles pour assurer le bon fonctionnement de
                son application, mesurer l&apos;audience et les contenus
                consultés ou personnaliser les contenus affichés.{'\n'}Pour en
                savoir plus sur les cookies, les données utilisées et leur
                traitement vous pouvez consulter{' '}
                <Text style={[Styles.textBtnBlue2]}>
                  notre politique en matière de cookies et nos engagements en
                  matière de sécurité et de Confidentialité de données
                  personnelles.
                </Text>
                {'\n'}
              </Text>
              <Text
                style={[styles.textBlack2, {top: 10, width: 320, left: 40}]}>
                Notre site n&apos;accepte que des profils vérifiés au delà de 7
                jours.{'\n'}Sinon votre compte sera suspendu.
              </Text>
              <Text style={[Styles.textBlue4, {top: 30, left: 0}]}>
                Nous sommes conforme RGPD, règlement générale à la
                règlementation de la protection des données
              </Text>
              </ScrollView>
            </View>
            <View style={[Styles.ViewBtnRow, {top: -20}]}>
            <TouchableOpacity
              accessibilityLabel="Refuser"
              onPress={() => {
                navigation.navigate('Love Coach', {
                  userConsent: 'Refuser',
                  routeName: routeChoice,
                });
                setButtonPressed('Refuser');
                setModalVisible(false);
              }}>
                <Text
                style={[
                  Styles.textBtn9,
                  {
                    zIndex: 1,
                    top: 40,
                    color: buttonPressed === 'Refuser' ? '#A70000' : '#0019A7',
                  },
                ]}>
                Refuser
              </Text>
              <Image
                style={[
                  {top: 0, width: 150, height: 50, resizeMode: 'contain'},
                ]}
                source={
                  buttonPressed === 'Refuser'
                    ? require('../../assets/boutons/Bouton-Trans-Court-Rouge.png')
                    : require('../../assets/boutons/Bouton-Trans-Court.png')
                }
              />

              </TouchableOpacity>
              <TouchableOpacity
              accessibilityLabel="Accepter"
              onPress={() => {
                navigation.navigate('Love Coach', {
                  userConsent: 'Accepter',
                  routeName: routeChoice,
                });
                setButtonPressed('Accepter');
                setModalVisible(false);
              }}>
              <Text style={[Styles.textBtn6, {zIndex: 2, top: 40}]}>
                Accepter
              </Text>
              <Image
                style={[
                  {top: 0, width: 150, height: 50, resizeMode: 'contain'},
                ]}
                source={
                  buttonPressed === 'Accepter'
                    ? require('../../assets/boutons/Bouton-Rouge-Court.png')
                    : require('../../assets/boutons/Bouton-Bleu-Court.png')
                }
              />
            </TouchableOpacity>
            </View>
          </Modal> 

           <View style={[Styles.row, {width: '100%', top: 10}]}>
          <TouchableOpacity
            style={[{}]}
            onPress={() => {
              setModalVisible(true);
              setButtonPressed(true);
            }}
            accessibilityLabel="Passer">
            <Image
              style={[
                {
                  bottom: 68,
                  width: 55,
                  height: 55,
                  resizeMode: 'contain',
                  left: 150,
                },
              ]}
              source={
                buttonPressed
                  ? require('../../assets/boutons/Passer-Rouge.png')
                  : require('../../assets/boutons/Passer.png')
              }
            />
            <Text
              style={[Styles.textBtn4, {bottom: 110, left: 260, fontSize: 16}]}>
              Passer
            </Text>
          </TouchableOpacity>
        </View> 
        </LinearGradient>
        </View>
    )
}

export default CreationEtDeveloppement;


const styles = StyleSheet.create({
    ViewVideo: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor:"red"
    },
    textBlack2:{
        color: '#000', 
        fontSize: 16, 
        fontFamily: 'Comfortaa-Bold', 
        textAlign: 'left',
    }
});
