import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Styles from '../../assets/style/Styles';

const Logo = () => {
  return (
    <View style={styles.ViewLogo2}>
      <Image
        style={styles.logo2}
        // source={require('../../assets/images/logo.png')}
        source={require('../../assets/imagesSvg/Rectangle 94.svg')}

      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  ViewLogo2: {
    flex: 1,
  },
  logo2: {
    resizeMode: 'contain',
    width: 210,
    height: 60,
    top: 0,
    left: -30,
  },
});