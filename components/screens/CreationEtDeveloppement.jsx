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
  
  const [buttonPressed, setButtonPressed] = useState(false);
  return(
    <View style={Styles.container}>
      <LinearGradient
           colors={['rgb(175,146,255)', 'rgba(202,187,254,1)', 'rgba(209,240,247,1)']}
           start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 0 }}
           locations={[0, 0.35, 1]}
          style={styles.container}
        >
           <Logo />
           <View style={[Styles.ViewText, {top: -300, left: 30}]}>
           <Text
            style={[
              {
                color: 'black',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 26,
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
                fontSize: 26,
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
            <View style={[styles.centeredView5, {top: 200}]}>
            <ScrollView style={[{width: "100%", alignSelf: 'center', top: 30}]}>
            <Text style={[styles.textBlue3]}>CONSENTEMENT</Text>
            <Text style={[styles.textBlue4]}>
                Nous respectons la vie privée de nos utilisateurs. Vos données,
                vos choix.{'\n'}MyBodyDate utilise des cookies et des
                informations non sensibles pour assurer le bon fonctionnement de
                son application, mesurer l&apos;audience et les contenus
                consultés ou personnaliser les contenus affichés.{'\n'}Pour en
                savoir plus sur les cookies, les données utilisées et leur
                traitement vous pouvez consulter{' '}
                <Text style={[styles.textBtnBlue2]}>
                  notre politique en matière de cookies et nos engagements en
                  matière de sécurité et de Confidentialité de données
                  personnelles.
                </Text>
                {'\n'}
              </Text>
              <Text
                style={[styles.textBlack2, {top: 10, width: 300, left: 37.5}]}>
                Notre site n&apos;accepte que des profils vérifiés au delà de 7
                jours.{'\n'}Sinon votre compte sera suspendu.
              </Text>
              <Text style={[styles.textBlue4, {top: 30, left: 0}]}>
                Nous sommes conforme RGPD, règlement générale à la
                règlementation de la protection des données
              </Text>

            </ScrollView>
             
            </View>
            <View style={[styles.ViewBtnRow, {top: -20}]}>
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
                  styles.textBtn9,
                  {
                    zIndex: 1,
                    top: 35,
                    left:20,
                    color: buttonPressed === 'Refuser' ? '#A70000' : '#0019A7',
                  },
                ]}>
                Refuser
              </Text>
              <Image
                style={[
                  {top: 0, left:20,width: 130, height: 50, resizeMode: 'contain'},
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
                <Text style={[styles.textBtn6, {zIndex: 2, top: 30,left:0}]}>
                {/* Accepter */}
              </Text>
              <Image
                style={[
                  {top: 16, left:0, width: 150, height: 50, resizeMode: 'contain'},
                ]}
                source={
                  buttonPressed === 'Accepter'
                    ? require('../../assets/boutons/Bouton-Rouge-Court.png')
                    : require('../../assets/imagesSvg/bouton continuer2.svg')
                }
              />
              </TouchableOpacity>
            </View>

          </Modal>
          <View style={[styles.row, {width: '100%', top: 10}]}>
          <TouchableOpacity
            style={[{}]}
            onPress={() => {
              setModalVisible(true);
              setButtonPressed(true);
            }}
            accessibilityLabel="Passer">
              <View style={buttonPressed ? styles.cercle2:styles.cercle}>
              <Image
                 style={[
                 {
                  bottom: 68,
                  width: 25,
                  height: 25,  
                  resizeMode: 'contain',
                  left: 13,
                  top:10
                },
              ]}
              source={require('../../assets/imagesSvg/flèche.svg')}
            />
            
            <Text
              style={[styles.textBtn4, {bottom: 10, left: 100, fontSize: 16}]}>
              Passer
            </Text>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
    </View>
  )

}

export default CreationEtDeveloppement;


const styles = StyleSheet.create({
  container: {
    width:"100vw",
    height:"100vh"
  },
  ViewVideo: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor:"red"
    },
  centeredView5: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    backgroundColor:"white",
    width:"100%"
  },

    textBlack2:{
        color: '#000', 
        fontSize: 16, 
        fontFamily: 'Comfortaa-Bold', 
        textAlign: 'left',
    },
    textBlue3: {
      width: '80%',
      color: 'black',
      fontSize: 26,
      textAlign: 'center',
      fontFamily: 'Comfortaa-Bold',
      alignSelf: 'center',
      marginBottom:"20px"
    },
  textBlue4: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Comfortaa-Bold',
    alignSelf: 'center',
  },
  textBtnBlue2: {
    color: '#0F0BAE',
    width: '80%',
    fontSize: 16,
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  ViewBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textBtn9: {
    color: '#0F0BAE',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
  },
  textBtn6: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  row: {
    flexDirection: 'row',
  },
  cercle:{
    borderRadius:50,
    backgroundColor:"black",
    width:"120%",
    height:"100%",
    top:-180,
    left:180
  },
  cercle2:{
    borderRadius:50,
    backgroundColor:"red",
    width:"120%",
    height:"100%",
    top:-180,
    left:180
 },
  textBtn4: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Comfortaa-Bold',
  },

});
