import {View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Page3 = ()=>{
  return(
    <LinearGradient
        colors={['rgb(175,147,255)', 'rgba(211,211,252,1)', 'rgba(201,237,246,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.35, 1]}
        style={styles.PageEntier}
      >
          <View>
            <View style={styles.ViewStyle1}>
              <Text style={styles.textStyle}>CheerFlakes</Text>
            </View>
             <View style={styles.ViewStyle2}>
                <Text style={styles.textStyle1}>Bienvenue</Text>
                <Text style={styles.textStyle2}>Decouvrez-nous</Text>
                <Image
                  source={require('../assets/images/flechePage3.png')}
                  style={{ width: "100%", height: "30%" }}
                />
             </View>
             <Text>Passer</Text>
          </View>
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
    PageEntier:{
    width:"100vw",
    height:"100vh",
    },
    ViewStyle1: {
        height:"7vh",
        width:"80%",
        margin:"auto"
    },
    ViewStyle2: {
        height:"80vh",
        width:"80%",
        display:"flex",
        justifyContent:"center",
        margin:"auto"
    },
    textStyle:{
       fontSize:"18px",
    },
    textStyle1:{
        fontSize:"35px"
    },
    textStyle2:{
        fontSize:"35px",
        marginBottom:"30px"
    }
})

export default Page3;