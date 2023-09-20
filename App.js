import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import CreationEtDeveloppement from './components/screens/CreationEtDeveloppement';
import LoveCoach from './components/screens/register/LoveCoach';
import LinksSignIn from './components/screens/register/LinksSignIn';
import Inscription from './components/screens/Inscription';
import ConfirmationEmail from './components/screens/register/ConfirmationEmail';
import Ville from './components/screens/register/Ville';
import AccesPosition from './components/screens/register/AccesPosition';
import Genre from './components/screens/register/Genre';
import DateDeNaissance from './components/screens/register/DateDeNaissance';
import Taille from './components/screens/register/Taille';
import Situation from './components/screens/register/Situation';
import Orientation from './components/screens/register/Orientation';
import Recherche1 from './components/screens/register/Recherche1';
import Recherche2 from './components/screens/register/Recherche2';
import Objectifs from './components/screens/register/Objectifs';
import Affinite from './components/screens/register/Affinite';
import RythmeDeVie1 from './components/screens/register/RythmeDeVie1';
import RythmeDeVie2 from './components/screens/register/RythmeDeVie2';
import CharteEngagement from './components/screens/register/CharteEngagement';
import Identifiant from './components/screens/register/Identifiant';
import Prenom from './components/screens/register/Prenom';
import ProfilMultiples from './components/screens/register/ProfilMultiples';




export default function App() {
  return (
    <View>
      <ProfilMultiples/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
});
