import { Image, TouchableOpacity } from "react-native";
import { View, Text, ImageBackground,StyleSheet } from "react-native-web";

const Inscription = ()=>{
      return(
        <ImageBackground  
         style={styles.container}
         source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>S'INSCRIRE</Text>
          </View>
          <ImageBackground  
               style={styles.boutonMail}
               source={require('../../assets/imagesSvg/Rectangle 40.svg')}
          >
          <TouchableOpacity style={styles.mailStyle}>
              <Text style={styles.textStyle2}>Entrez votre e-mail</Text>
          </TouchableOpacity>
        </ImageBackground>

          <View style={styles.viewStyle2}>
            <Text style={styles.textStyle3}>Un lien pour vous connecter à votre ancien</Text>
            <Text style={styles.textStyle4}>compte, va être envoyé par e-mail.</Text>
          </View>
          
          <TouchableOpacity style={styles.continuerStyle}>
            <Text style={styles.textStyle5}>Continuer</Text>
          </TouchableOpacity>

        </ImageBackground>
      )
}

export default Inscription;

const styles = StyleSheet.create({
  container: {
    width:"100vw",
    height:"100vh",
  },
  viewStyle:{
    // backgroundColor:"red",
    width:"296px",
    height:"144px",
    marginTop:117,
    marginLeft:"33px"
  },
  textStyle:{
    fontSize:24,
    fontWeight:"700",
  },
  mailStyle:{
    // backgroundColor:"rgba(255, 255, 255, 0.5)",
    width:"300px",
    height:"51px",
    // marginLeft:"33px",
    borderRadius:50,
    marginBottom:17
},
boutonMail:{
    width:"300px",
    height:"51px",
    marginLeft:"33px",
    marginBottom:17
},
textStyle2:{
    fontSize:18,
    margin:"auto",
    marginBottom:17,
    color:"#696969"
},
  viewStyle2:{
    // backgroundColor:"green",
    width:"291px",
    height:"142px",
    marginLeft:"38px",
    marginBottom:206
},
  continuerStyle:{
    backgroundColor:"white",
    width:"300px",
    height:"51px",
    marginLeft:"33px",
    borderRadius:50
},
textStyle5:{
    fontSize:18,
    color:"rgba(0, 25, 167, 0.97)",
    margin:"auto"
}
})