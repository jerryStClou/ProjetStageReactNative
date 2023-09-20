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
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  // const routeChoice = route.params?.routeName ?? '';
  // console.log('Choix de route : ', routeChoice);

  //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
  const [isPlaying, setIsPlaying] = useState(false);
  // const btnOpacity = useRef(new Animated.Value(0));

  const [modalVisible, setModalVisible] = useState(false);
  const [consentement, setConsentement] = useState();
  const [buttonPressed, setButtonPressed] = useState(false);
  return(
    <View style={Styles.container}>
      <ImageBackground
           source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}
          style={styles.container}
        >
          <View style={styles.ViewLogo}>
             <Logo />
          </View>
          <View style={styles.ViewText}>
            <Text style={styles.textStyle1}>CRÉATION ET</Text>
            <Text style={styles.textStyle1}>DÉVELOPPEMENT.</Text>
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
          }}
        >
          <View style={styles.centeredView5}>
          <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.ViewDiv}>
            <Text style={[styles.textBlue3]}>CONSENTEMENT</Text>
            </View>

         <View style={[styles.ViewText2]}>
          <Text style={[styles.textBlue4]}>
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
              </View>      
              <View style={[styles.ViewText3]}>
              
              <Text
                style={[styles.textBlack2]}>
                Notre site n&apos;accepte que des profils vérifiés au delà de 7
                jours.{'\n'}Sinon votre compte sera suspendu.
              </Text>
              <Text style={[styles.textBlue5]}>
                Nous sommes conforme RGPD, règlement générale à la
                règlementation de la protection des données
              </Text>
              </View>
             <View style={[styles.lesBoutons]}>
             <TouchableOpacity
              accessibilityLabel="Refuser"
              onPress={() => {
                // navigation.navigate('Love Coach', {
                //   userConsent: 'Refuser',
                //   routeName: routeChoice,
                // });
                setButtonPressed('Refuser');
                setModalVisible(false);}}
              style={buttonPressed  === 'Accepter'? styles.boutonStyle3 : styles.boutonStyle2}
                >
                <View>
                  <Text style={styles.textStyle2}>Refuser</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity 
              accessibilityLabel="Accepter"
              onPress={() => {
                // navigation.navigate('Love Coach', {
                //   userConsent: 'Accepter',
                //   routeName: routeChoice,
                // });
                setButtonPressed('Accepter');
                setModalVisible(false);
                
              }}
              style={buttonPressed  === 'Accepter'? styles.boutonStyle3 : styles.boutonStyle2}

              >
                <View>
                  <Text style={styles.textStyle2}>Accepter</Text>
                </View>
              </TouchableOpacity>
             </View>
              
            </ScrollView>
          </View>
          
        </Modal>
        <View style={styles.ensembleBouton}>
        <TouchableOpacity  
          onPress={() => {
            setModalVisible(true);
            setButtonPressed(true);}}
        >
        <ImageBackground style={styles.boutonStyle}
           source={require('../../assets/imagesSvg/bouton avancement.svg')}
        >
         
             <Image source={require('../../assets/imagesSvg/flèche.svg')}
              style={styles.flecheStyle}/>
          
         </ImageBackground>
        </TouchableOpacity>

      <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setButtonPressed(true);}}>
        <View style={styles.DivPasser}>
          <Text style={styles.passerStyle}>Passer</Text>
        </View>
      </TouchableOpacity> 
      </View>
         

        </ImageBackground>
    </View>
  )

}

export default CreationEtDeveloppement;


const styles = StyleSheet.create({
  //Style de l'ImageBackground
  container: {
    width:"100vw",
    height:"100vh"
  },
  //Style de la div(block) du Logo
  ViewLogo:{
    // backgroundColor:"red",
    height:"20%"
  },
  ViewText:{
    // backgroundColor:"blue",
    height:"144px",
    width:"296px",
    marginLeft:"10%"
  },
  textStyle1:{
    fontFamily:"Comfortaa",
    fontSize:"24px",
  },
  
  ensembleBouton:{
    // backgroundColor:"grey",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginTop:"300px",
    marginLeft:"130px",

  },
  boutonStyle:{
    //  backgroundColor:"lightgreen",
     width:"55px",
     height:"55px",
    //  marginLeft:"150%",
    //  marginTop:"391px",
     justifyContent:"center",
     alignItems:"center"
  },
  flecheStyle:{
    width:"12.1px",
    height:"24.54px",
  },
  DivPasser:{
    width:"79px",
    height:"25px",
    marginLeft:"50%"
  },
  passerStyle:{
    fontSize:"16px",
    fontFamily:"Comfortaa",
    textDecorationLine:"underline"
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
    backgroundColor: 'white',
    // backgroundColor:"white",
    width:"100%",
    top:155
  },
  ScrollViewStyle:{
    top:"20",
    width:400
  },
ViewText3:{
  marginLeft:36,
  marginTop:"0px",
  width:318,
  height:160,
  // backgroundColor:"lightblue"
},
    textBlack2:{
        color: '#000', 
        fontSize: 16, 
        fontFamily: 'Comfortaa-Bold', 
        // textAlign: 'left',
    },
    ViewDiv:{
      width:296,
      height:48,
      marginLeft:47,
      marginBottom:"10px",
      marginTop:63
    },
    textBlue3: {
      width: '80%',
      color: 'black',
      fontSize: 26,
      textAlign: 'center',
      fontFamily: 'Comfortaa-Bold',
      alignSelf: 'center',
      // marginBottom:"20px",
      // marginTop:63
    },
    ViewText2:{
      width:317,
      height:259,
      marginLeft:36
    },
  textBlue4: {
    // width: '80%',
    color: '#0F0BAE',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Comfortaa-Bold',
    alignSelf: 'center',
  },
  textBlue5:{
    color:"blue",
    fontSize:16
  },
  lesBoutons:{
    // backgroundColor:"red",
    display:"flex",
    flexDirection:"row"
  },
  boutonStyle2:{
    borderColor:"#D2C2FF",
    borderWidth:"2px",
    borderStyle:"solid",
    borderRadius:50,
    width:159,
    height:56,
    marginLeft:24,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  textStyle2:{
    fontSize:18,
    color:"#0019A7"
  },
  boutonStyle3:{
    borderColor:"#D2C2FF",
    borderWidth:"2px",
    borderStyle:"solid",
    backgroundColor:"#D2C2FF",
    borderRadius:50,
    width:159,
    height:56,
    marginLeft:24,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
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


