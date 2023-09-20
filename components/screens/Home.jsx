import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Styles from '../../assets/style/Styles';

//Home Screen
 const Home = ({navigation}) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        navigation.navigate('Home Next');
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, [navigation]);
  
    return (
      
      <ImageBackground
      style={Styles.container}
      source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}>
            
          <View style={styles.ViewLogo1}>
            <Image
              style={Styles.logo1}
              source={require('../../assets/imagesSvg/Rectangle 94.svg')}
            />
          </View>
  
          {/* <View style={[Styles.ViewBtn1, {top: 400}]}>
                  <TouchableOpacity
                      style={Styles.btn1}
                      onPress={() => navigation.navigate('Home Next')}
                      accessibilityLabel="Commencer">
                      <Text style={Styles.textBtn}>Commencer</Text>
                  </TouchableOpacity>
              </View> */}
       
      </ImageBackground>
    );
  };
  

export default Home;


const styles = StyleSheet.create({
  container: {
    width:"100vw",
    height:"100vh",
  },
  ViewLogo1: {
    width:"100vw",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  logo1: {
    resizeMode: 'contain',
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
});