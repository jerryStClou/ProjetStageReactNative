import {View, Text, StyleSheet, ImageBackground, Button,  TouchableOpacity} from 'react-native';
import BackgroundImage from '../assets/images/bg-cheerflakes.png';
import { TextInput } from 'react-native-web';
import { PixelRatio } from 'react-native';


const Page2 = () =>{
  const baseFontSize = 30;
  const fontSize = baseFontSize * PixelRatio.getFontScale();
    return(
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View>
            <View style={styles.viewStyle1}>
               <Text style={styles.textStyle}>CHEER FLAKES</Text>
            </View>

            <View style={styles.viewStyle2}>
               <TouchableOpacity style={styles.buttonStyle}>
                 <Text style={{fontSize, margin:"auto"} }>S'incrire</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.buttonStyle2}>
                 <Text style={{fontSize, margin:"auto"}}>Se connecter</Text>
               </TouchableOpacity>
            </View>


        </View>

    </ImageBackground>


            

           
            

    )

};


const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    width: '100vw',
    height: '100vh',
  },
  viewStyle1:{
    height:"10vh"
  },
  viewStyle2:{
    height:"80vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-end",
    alignItems:"center"
  },
  textStyle:{
    color:"white",
    fontWeight:"bold",
    fontSize:"3em",
    margin:"auto",
  },
  buttonStyle:{
    width:"80%",
    height:"10%",
    backgroundColor:"#D2C2FF",
    marginBottom:"10px"
  },
  textStyle2:{
    margin:"auto",
  },
  buttonStyle2:{
    width:"80%",
    height:"10%",
    backgroundColor:"white",
  },
  textStyle3:{
    margin:"auto",
    color:"#0019A7",
  }
})

export default Page2;


