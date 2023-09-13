import { useState } from "react";
import { View, Text, Modal, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native-web";

const Test = ()=>{
    const [modalVisible, setModalVisible] = useState(true);
    const [buttonPressed, setButtonPressed] = useState(true);
    return(
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                requestLocationPermission, setModalVisible(!modalVisible);
              }}
          >
            <View style={[styles.centeredView5, {top: 200}]}>
             <ScrollView style={[{width: 400, alignSelf: 'center', top: -90}]}>
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
                     style={[styles.textBlack2, {top: 10, width: 320, left: 40}]}>
                     Notre site n&apos;accepte que des profils vérifiés au delà de 7
                     jours.{'\n'}Sinon votre compte sera suspendu.
                   </Text>
                   <Text style={[styles.textBlue4, {top: 30, left: 0}]}>
                     Nous sommes conforme RGPD, règlement générale à la
                     règlementation de la protection des données
                   </Text>
            </ScrollView>
            </View>

            <View style={[styles.ViewBtnRow, {top: -60}]}>
            <TouchableOpacity
               accessibilityLabel="Refuser"
               onPress={() => {
                navigation.navigate('Love Coach', {
                  userConsent: 'Refuser',
                  routeName: routeChoice,
                });
                setButtonPressed('Refuser');
                setModalVisible(false);
            }}
            >
                <Text
                style={[
                  styles.textBtn9,
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
                    ? require('../assets/boutons/Bouton-Trans-Court-Rouge.png')
                    : require('../assets/boutons/Bouton-Trans-Court.png')
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
                <Text style={[styles.textBtn6, {zIndex: 2, top: 40}]}>
                Accepter
              </Text>
              <Image
                style={[
                  {top: 0, width: 150, height: 50, resizeMode: 'contain'},
                ]}
                source={
                  buttonPressed === 'Accepter'
                    ? require('../assets/boutons/Bouton-Rouge-Court.png')
                    : require('../assets/boutons/Bouton-Bleu-Court.png')
                }
              />
              </TouchableOpacity>
            </View>
            
          </Modal>
        </View>
    )

}
export default Test;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    textBlue3: {
        width: '80%',
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Comfortaa-Bold',
        alignSelf: 'center',
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
      textBlack2: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Comfortaa-Bold',
        textAlign: 'left',
      },
      
  centeredView5: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  ViewBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textBtn9: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
  },
  textBtn6: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
});
