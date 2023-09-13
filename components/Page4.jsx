import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundImage from '../assets/images/Background.png';

const Page4 = ()=>{
    return(
       <LinearGradient
       colors={['rgb(175,147,255)', 'rgba(211,211,252,1)', 'rgba(201,237,246,1)']}
       start={{ x: 0, y: 0 }}
       end={{x: -0.8, y: 0.60}}
       locations={[0, 0.35, 1]}
       style={styles.PageEntier}
       >
        <View style={styles.ViewStyle1}>
          <Image
                  source={require('../assets/images/Rectangle 94.svg')}
                  style={{ width: "40%", height: "10%" }}
           />
        </View>
        <View>
           <Text style={styles.textStyle}>Création et</Text>
           <Text style={styles.textStyle}>Développement.</Text>
        </View>  
        <View>
           <Image
                  source={require('../assets/images/bouton avancement.svg')}
                  style={{width:"20%",height:"20%"}}
            />
        </View>
       </LinearGradient>
    )

}

const styles = StyleSheet.create({
   ViewStyle1:{
      backgroundColor:"red"
   },
    backgroundImage: {
    flex: 1,
    width: '100vw',
    height: '100vh',
  },
  PageEntier:{
  width:"100vw",
  height:"100vh",
  },
  textStyle:{
    fontSize:"20px"
  }
    
})

export default Page4;
