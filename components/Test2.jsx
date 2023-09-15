import { View, StyleSheet, Text } from "react-native";

const Test2 = ()=>{
     return(
        <View style={styles.container2}>
           <Text>Hello</Text>
           <Text>Hello</Text>
           <Text>Hello</Text>
           <Text>Hello</Text>

        </View>
     )
}
export default Test2;


const styles = StyleSheet.create({
  container2: {
    // width:"100%",
    // height:"100vh",
    backgroundColor:"blue",
    flex:1,
    justifyContent:"center"
  },
});