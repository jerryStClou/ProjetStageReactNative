import {View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Page1 = () =>{

    return(
        <View>
            <LinearGradient
        colors={['rgb(175,147,255)', 'rgba(211,211,252,1)', 'rgba(201,237,246,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.35, 1]}
        style={styles.PageEntier}
      >
               {/* <Text style={styles.textStyle}>CHEER FLAKES</Text> */}
               <Image
                  source={require('../assets/imagesSvg/Rectangle 94.svg')}
                  style={{width:"20%",height:"20%"}}
               />

            </LinearGradient>
           
        </View>
 
    )

}

export default Page1;
const styles = StyleSheet.create({
    PageEntier:{
    width:"100vw",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    },
    textStyle:{
        fontSize:"20px",
        fontWeight:"bold"
    }
})