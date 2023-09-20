import React, {useRef, useEffect} from 'react';
import Logo from '../composants/Logo';
// import Video from 'react-native-video';
import Styles from '../../assets/style/Styles';

import {
    View,
    Text,
    Animated,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    Image,StyleSheet
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';


const Bienvenue = ({route, navigation})=>{
 //Constante permettant de savoir si l'utilisateur à appuyer sur play ou sur pause
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };


  return(
    
      <ImageBackground
      source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}
        style={styles.container}
        >
           <Logo />
           <View style={[Styles.ViewText, {left: 20}]}>
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
            BIENVENUE,
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
            DÉCOUVREZ NOUS.
          </Text>
           </View>
           <View style={[Styles.ViewVideo, {top: -50}]}>
            {/* <Video
            source={{
              uri: 'https://video.wixstatic.com/video/8e4c05_5791dadfe85b41e792e18d6fcac7717a/480p/mp4/file.mp4',
            }}
            paused={!isPlaying}
            controls={false}
            style={Styles.video}
            muted={true}
          /> */}
          <View style={styles.ViewStyle}>
            <TouchableHighlight
              style={{margin: 5}}
              underlayColor="transparent"
              activeOpacity={0.2}
              onHideUnderlay={handleHover}
              onShowUnderlay={handleUnhover}
              onPress={() => setIsPlaying(p => !p)}>
              {isHovered ? (
                <Image
                  style={styles.btnVideo}
                  source={require('../../assets/imagesSvg/Polygon 1.svg')}
                />
              ) : isPlaying ? (
                <Image
                  style={styles.btnVideo}
                  source={require('../../assets/images/pause.png')}
                />
              ) : (
                <Image
                  style={styles.btnVideo}
                  source={require('../../assets/imagesSvg/Polygon 1.svg')}
                />
              )}

            </TouchableHighlight>
          </View>
           </View>
           <TouchableOpacity
              style={[{bottom: 100, left:'20%'}]}
          onPress={() =>
            navigation.navigate('Création et Développement', {
              routeName: routeChoice,
            })
          }
          accessibilityLabel="Passer">
          <Text
            style={[
              {
                color: 'black',
                textAlign: 'center',
                fontFamily: 'Comfortaa',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 700,
                textDecorationLine: 'underline',
              },
            ]}>
            Passer
          </Text>

           </TouchableOpacity>
      </ImageBackground>
          
    
  )
}

export default Bienvenue;

const styles = StyleSheet.create({
  container: {
    width:"100vw",
    height:"100vh"
  },
  ViewStyle: {
    backgroundColor:"white",
    width:"80%",
    height:"40%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  btnVideo: {
    width: 30,
    height: 45,
    top: 0,
  },
});
