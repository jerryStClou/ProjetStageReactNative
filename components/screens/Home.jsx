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
      <LinearGradient
        colors={['rgb(175,147,255)', 'rgba(211,211,252,1)', 'rgba(201,237,246,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.35, 1]}
        style={styles.container}
      >
        
          <View style={Styles.ViewLogo1}>
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
       
      </LinearGradient>
    );
  };
  

export default Home;


const styles = StyleSheet.create({
  container: {
    width:"100vw",
    height:"100vh"
  },
});