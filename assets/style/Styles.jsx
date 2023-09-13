import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Règles Communes
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    height: '100%',
    width: '100%',
    top: -100,
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },

  // Font
  fl: {
    fontFamily: 'Comfortaa-Light',
  },
  fb: {
    fontFamily: 'Comfortaa-Bold',
  },
  fr: {
    fontFamily: 'Comfortaa',
  },

  // Margins and Padding
  ml_20: {
    marginLeft: -20,
  },
  ml20: {
    marginLeft: 20,
  },
  ml40: {
    marginLeft: 40,
  },
  mt_20: {
    marginTop: -20,
  },
  mt_40: {
    marginTop: -40,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt50: {
    marginTop: 50,
  },
  mt60: {
    marginTop: 60,
  },
  mt80: {
    marginTop: 80,
  },
  mt100: {
    marginTop: 100,
  },
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mb50: {
    marginBottom: 50,
  },
  mb100: {
    marginBottom: 100,
  },
  mx10: {
    marginLeft: 10,
    marginRight: 10,
  },
  mx20: {
    marginLeft: 20,
    marginRight: 20,
  },

  // Logo
  ViewLogo1: {
    flex: 1,
    top: '45%',
  },
  logo1: {
    resizeMode: 'contain',
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  ViewLogo2: {
    flex: 1,
  },
  ViewLogo3: {
    flex: 1,
  },
  logo2: {
    resizeMode: 'contain',
    width: 200,
    height: 50,
    top: 50,
    left: 30,
  },
  logo3: {
    resizeMode: 'contain',
    width: 320,
    height: 50,
    top: 50,
    left: 30,
  },
  // Text
  ViewText: {
    flex: 1,
  },
  ViewText2: {
    flex: 2,
  },
  ViewText3: {
    flex: 3,
  },
  ViewText4: {
    flex: 4,
  },
  ViewText5: {
    flex: 5,
  },
  ViewText6: {
    flex: 1,
  },
  textTitleWhite: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold',
  },
  textTitleWhite2: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Comfortaa-Bold',
  },
  textTitleWhite3: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  textWhite: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold',
  },
  textWhite2: {
    color: '#fff',
    fontSize: 18,
    width: '90%',
    height: 200,
    fontFamily: 'Comfortaa',
  },
  textWhite3: {
    color: '#fff',
    fontSize: 18,
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  textWhite4: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  textWhite5: {
    color: '#fff',
    fontSize: 18,
    width: '80%',
    height: 280,
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  textWhite6: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Comfortaa',
  },
  textWhite7: {
    color: '#fff',
    fontSize: 18,
    width: '80%',
    height: 350,
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  textWhite8: {
    color: '#fff',
    fontSize: 16,
    width: '70%',
    height: 350,
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
  },
  textError: {
    color: '#880808',
    width: '70%',
    fontSize: 18,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: '#880808',
    fontFamily: 'Comfortaa',
  },
  textError2: {
    color: '#880808',
    width: '80%',
    fontSize: 18,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: '#880808',
    fontFamily: 'Comfortaa',
  },
  textWhiteCenter: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 20,
  },
  textWhiteCenter2: {
    color: '#fff',
    fontSize: 16,
    width: '75%',
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
    textAlign: 'center',
  },
  textGrayCenter: {
    color: '#cacaca',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 20,
  },
  textRed: {
    color: '#A70000',
    width: '80%',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontFamily: 'Comfortaa',
    textAlign: 'center',
    alignSelf: 'center',
  },
  textBlue: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    textAlign: 'left',
    alignSelf: 'center',
  },
  textBlue2: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 27,
    fontFamily: 'Gilroy',
    fontWeight: 700,
    textAlign: 'left',
    alignSelf: 'center',
  },
  textBlue22: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 27,
    fontFamily: 'Gilroy',
    textAlign: 'left',
    alignSelf: 'center',
  },
  textBlue3: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    alignSelf: 'center',
  },
  textBlue4: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Comfortaa-Bold',
    alignSelf: 'center',
  },
  textBlueBold: {
    color: '#0F0BAE',
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Comfortaa',
  },
  textBlueCenter: {
    color: '#0F0BAE',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    alignSelf: 'center',
  },
  textBlueCenter2: {
    color: '#0F0BAE',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '800',
  },
  textBlueCenter3: {
    color: '#0F0BAE',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textBlack: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Comfortaa',
    alignSelf: 'center',
  },
  textBlack2: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'left',
  },
  textBlackBold: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
  },
  textBlackBold2: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
  },
  textWhiteRound: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    width: '80%',
    padding: 12,
    height: 50,
    alignSelf: 'center',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
  },

  // Boutons
  ViewBtn1: {
    flex: 2,
  },
  btn1: {
    backgroundColor: '#0F0BAE',
    borderRadius: 20,
    width: 150,
    height: 40,
    padding: 5,
    alignSelf: 'center',
  },
  ViewBtn2: {
    flex: 3,
  },
  btn2: {
    alignSelf: 'center',
  },
  BtnBlack: {
    backgroundColor: '#000',
    borderRadius: 30,
    width: '90%',
    height: 50,
    padding: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BtnLogBlack: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: '80%',
    height: 40,
    padding: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BtnLogBlue: {
    backgroundColor: '#0F0BAE',
    borderRadius: 20,
    width: '80%',
    height: 40,
    padding: 5,
    alignSelf: 'center',
  },
  BtnBlack2: {
    backgroundColor: '#000',
    borderRadius: 40,
    width: '85%',
    height: 55,
    padding: 2,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  btnImportPhoto: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  ViewBtn3: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ViewBtn4: {
    flex: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ViewBtn5: {
    alignSelf: 'center',
  },
  ViewBtn6: {
    flex: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ViewBtn7: {
    flex: 5,
    top: -80,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ViewBtn8: {
    flex: 2,
    top: 130,
    alignSelf: 'center',
  },
  ViewBtnLog: {
    flex: 3,
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  ViewBTNSelect: {
    flex: 3,
    top: 100,
  },
  ViewBTNSelect2: {
    flex: 3,
  },
  ViewBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ViewTextChoice: {
    flex: 4,
  },
  textBtnBlue: {
    color: '#0F0BAE',
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  textBtnBlue2: {
    color: '#0F0BAE',
    width: '80%',
    fontSize: 16,
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  textBtnBlue3: {
    color: '#0F0BAE',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'none',
  },
  textBtn2: {
    color: '#fff',
    fontSize: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  textBtn3: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginRight: 60,
    textDecorationLine: 'underline',
    fontFamily: 'Comfortaa-Bold',
  },
  textBtn4: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'Comfortaa-Bold',
  },
  textBtn5: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  textBtn6: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
  },
  textBtn7: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
  },
  textBtn8: {
    color: '#fff',
    fontSize: 14,
    width: '80%',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textBtn9: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
  },
  textBtn10: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
  },
  textBtnModal: {
    color: '#0F0BAE',
    backgroundColor: '#fff',
    width: 120,
    height: 50,
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#0F0BAE',
    borderRadius: 30,
    alignSelf: 'center',
  },
  textBtnModalAcc: {
    color: '#fff',
    backgroundColor: '#0F0BAE',
    width: 120,
    height: 50,
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#0F0BAE',
    borderRadius: 30,
    alignSelf: 'center',
  },
  SelectedText: {
    textAlign: 'center',
    alignSelf:'center',
    color: '#0F0BAE',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 20,
    width: 80,
  },
  NotSelectedText: {
    textAlign: 'center',
    alignSelf:'center',
    color: '#FFF',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    width: 80,
  },
  btnSelected: {
    color: '#0F0BAE',
    backgroundColor: 'transparent',
    width: 350,
    height: 50,
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#0F0BAE',
    borderRadius: 30,
    alignSelf: 'center',
  },
  btnNotSelected: {
    color: '#fff',
    backgroundColor: 'transparent',
    width: 350,
    height: 50,
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#0F0BAE',
    borderRadius: 30,
    alignSelf: 'center',
  },
  imgBtn2: {
    width: 50,
    height: 50,
  },
  ImgBulle: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  ImgMessage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#0DCFE6',
    backgroundColor: '#0DCFE6',
  },
  imgCard: {
    width: 200,
    height: 120,
    alignSelf: 'center',
    marginTop: 10,
  },
  icoBtn: {
    marginRight: 200,
  },
  imgPhoto: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#0F0BAE',
    borderRadius: 20,
  },

  // TextInput
  radioInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioInputContainerTwo: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
  },
  radioInputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  radioInputLabel: {
    fontSize: 16,
  },
  ViewInput: {
    flex: 2,
    top: '10%',
  },
  ViewInputDate: {
    alignSelf: 'center',
  },
  ViewInputPrenom: {
    flex: 3,
    top: 280,
    width: '100%',
    alignSelf: 'center',
  },
  ViewInputPrenom2: {
    flex: 2,
    width: '100%',
    alignSelf: 'center',
  },
  ViewInputEmail: {
    top: 100,
  },
  imgPrenomAdv: {
    width: 70,
    height: 70,
    top: -200,
  },
  InputDates: {
    borderWidth: 2,
    borderColor: '#0F0BAE',
    borderRadius: 50,
    height: 200,
    width: 300,
    textAlign: 'center',
  },
  InputDate: {
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    color: '#FFF',
  },
  TextInput: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 30,
    padding: 15,
  },
  TextInputTwo: {
    color: '#FFF',
    fontSize: 14,
    padding: 15,
  },
  TextInputEmail: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 30,
    padding: 15,
    top: 50,
  },
  TextInputPassword: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 30,
    padding: 15,
  },
  ViewInputRadioLang: {
    flexDirection: 'row',
    marginLeft: 50,
    top: -200,
  },
  btnInputLang: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  SelectedImage: {
    width: 20,
    height: 20,
  },
  textBtnInputLang: {
    marginLeft: 10,
    color: '#FFF',
    fontSize: 16,
  },

  // Modal
  centeredView: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  centeredView2: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  centeredView3: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  centeredView4: {
    flex: 3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  centeredView5: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  modalView: {
    width: '100%',
    height: '50%',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  // Screens
  ViewVideo: {
    flex: 3,
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 170,
    backgroundColor: '#fff',
  },
  videoCredits: {
    width: '100%',
    height: '50%',
    backgroundColor: '#000',
    resizeMode: 'cover',
  },
  CntBtnVideo: {
    flexDirection: 'row',
  },
  btnVideo: {
    width: 30,
    height: 45,
    top: -110,
  },
  btnNext: {
    width: 80,
    height: 80,
  },
  ViewRadio: {
    flex: 3,
    marginTop: 200,
    marginLeft: 20,
  },
  ViewImg: {
    flex: 3,
  },
  BlockImg: {
    width: 130,
    height: 130,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  ViewScroll: {
    height: 150,
    width: 160,
    alignSelf: 'center',
  },
  ViewFlatlist: {
    height: 130,
  },

  //  Boutons Scroll Up and Down
  barreScrollBtn: {
    backgroundColor: '#FFF',
    top: -130,
    height: 100,
    left: 287,
    width: 4,
  },
  ScrollBtnDown: {
    left: 280,
    top: -140,
  },
  ScrollBtnUp: {
    left: 280,
    top: 25,
  },

  // Ligne
  line: {
    backgroundColor: '#0F0BAE',
    height: 2,
    width: '70%',
    alignSelf: 'center',
    margin: 15,
  },
});

export default styles;

// import { StyleSheet } from 'react-native';
// export default StyleSheet.create({
//     // Règles Communes

//     //font comfortaa

//     fl: { fontFamily: 'Comfortaa-Light', },

//     fb: { fontFamily: 'Comfortaa-Bold', },

//     fr: { fontFamily: 'Comfortaa-Regular', },

//     container: { flex: 1, justifyContent: 'center', },

//     container2: { flex: 1, height:'100%', width:'100%', top:-100},

//     bgGradient: { resizeMode: 'contain', width: '100%', height: '100%', },

//     ml_20: { marginLeft: -20, },

//     ml20: { marginLeft: 20, },

//     ml40: { marginLeft: 40, },

//     mt_20: { marginTop: -20, },

//     mt_40: { marginTop: -40, },

//     mt10: { marginTop: 10, },

//     mt20: { marginTop: 20, },

//     mt50: { marginTop: 50, },

//     mt60: { marginTop: 60, },

//     mt80: { marginTop: 80, },

//     mt100: { marginTop: 100, },

//     mb10: { marginBottom: 10, },

//     mb20: { marginBottom: 20, },

//     mb50: { marginBottom: 50, },

//     mb100: { marginBottom: 100, },

//     mx10: { marginLeft: 10, marginRight: 10, },

//     mx20: { marginLeft: 20, marginRight: 20, },

//     row: { flexDirection: 'row', },

//     //Logo
//     ViewLogo1: { flex: 1, top: '45%', },

//     logo1: { resizeMode: 'contain', width: 250, height: 100, alignSelf: 'center', },

//     ViewLogo2: { flex: 1, },

//     ViewLogo3: { flex: 1, },

//     logo2: { resizeMode: 'contain', width: 200, height: 50, top: 50, left: 30, },

//     logo3: { resizeMode: 'contain', width: 320, height: 50, top: 50, left: 30, },

//     //Text

//     ViewText: { flex: 1, },

//     ViewText2: { flex: 2, },

//     ViewText3: { flex: 3, },

//     ViewText4: { flex: 4, },

//     ViewText5: { flex: 5, },

//     ViewText6: { flex: 1, },

//     textTitleWhite: { color: '#fff', fontSize: 20, fontFamily:'Comfortaa-Bold', },

//     textTitleWhite2: { color: '#fff', fontSize: 22, fontFamily:'Comfortaa-Bold', },

//     textTitleWhite3: { color: '#fff', fontSize: 20, textAlign:'center', fontFamily:'Comfortaa-Bold', },

//     textWhite: { color: '#fff', fontSize: 20, fontFamily: 'Comfortaa-Bold', },

//     textWhite2: { color: '#fff', fontSize: 18, width: '90%', height: 200, fontFamily: 'Comfortaa-Regular', },

//     textWhite3: { color: '#fff', fontSize: 18, width: "90%", alignSelf: "center", fontFamily: 'Comfortaa-Regular', },

//     textWhite4: { color: '#fff', fontSize: 18, alignSelf: "center", fontFamily: 'Comfortaa-Regular', },

//     textWhite5: { color: '#fff', fontSize: 18, width: '80%', height: 280, alignSelf: "center", fontFamily: 'Comfortaa-Regular',},

//     textWhite6: { color: '#fff', fontSize: 18, fontFamily: 'Comfortaa-Regular', },

//     textWhite7: { color: '#fff', fontSize: 18, width: '80%', height: 350, alignSelf: "center", fontFamily: 'Comfortaa-Regular', },

//     textWhite8: { color: '#fff', fontSize: 16, width: '70%', height: 350, alignSelf: "center", fontFamily: 'Comfortaa-Regular', },

//     textError: { color: '#880808', width: '70%', fontSize: 18, alignSelf: "center", textDecorationLine: 'underline', textDecorationColor: 'red', fontFamily: 'Comfortaa-Regular', },

//     textError2: { color: '#880808', width: '80%', fontSize: 18, alignSelf: "center", textDecorationLine: 'underline', textDecorationColor: 'red', fontFamily: 'Comfortaa-Regular', },

//     textWhiteCenter: { color: '#fff', textAlign: 'center', fontFamily: 'Comfortaa-Regular', fontSize: 20, },

//     textWhiteCenter2: { color: '#fff', fontSize: 16, width: "75%", alignSelf: "center", fontFamily: 'Comfortaa-Regular', textAlign: 'center', },

//     textGrayCenter: { color: '#cacaca', textAlign: 'center', fontFamily: 'Comfortaa-Regular', fontSize: 20, },

//     textRed: { color: '#A70000', width: '80%', fontSize: 20, textDecorationLine: 'underline', fontFamily: 'Comfortaa-Regular', textAlign: 'center', alignSelf: 'center', },

//     textBlue: { width: '80%', color: '#0F0BAE', fontSize: 18, fontFamily: 'Comfortaa-Regular', textAlign: 'left', alignSelf: 'center', },

//     textBlue2: {  width: '80%', color: '#0F0BAE', fontSize: 20, fontFamily: 'Comfortaa-Bold', textAlign: 'left', alignSelf: 'center',},

//     textBlue3: { width: '80%', color: '#0F0BAE', fontSize: 24, textAlign: 'center', fontFamily: 'Comfortaa-Bold', alignSelf: 'center', },

//     textBlue4: { width: '80%', color: '#0F0BAE', fontSize: 16, textAlign: 'left', fontFamily: 'Comfortaa-Bold', alignSelf: 'center', },

//     textBlueBold: { color: '#0F0BAE', fontSize: 20, fontWeight: 800, fontFamily: 'Comfortaa-Regular',},

//     textBlueCenter: { color: '#0F0BAE', fontSize: 18, fontFamily: 'Comfortaa-Regular', alignSelf: 'center',},

//     textBlueCenter2: { color: '#0F0BAE', fontSize: 18, fontFamily: 'Comfortaa-Regular', alignSelf: 'center', textAlign: 'center', fontWeight: 800, },

//     textBlueCenter3: { color: '#0F0BAE', fontSize: 18, fontFamily: 'Comfortaa-Regular', alignSelf: 'center', textAlign: 'center',},

//     textBlack: { color: '#000', fontSize: 20, fontFamily: 'Comfortaa-Regular', alignSelf: 'center', },

//     textBlack2: { color: '#000', fontSize: 16, fontFamily: 'Comfortaa-Bold', textAlign: 'left',},

//     textBlackBold: { color: '#000', fontSize: 20, fontFamily: 'Comfortaa-Bold', textAlign:'center', },

//     textBlackBold2: { color: '#000', fontSize: 16, fontFamily: 'Comfortaa-Bold', textAlign:'center',},

//     textWhiteRound: { color: '#fff', textAlign: 'center', fontFamily: 'Comfortaa-Regular', width: '80%', padding: 12, height: 50, alignSelf: 'center', fontSize: 20, borderWidth: 2, borderColor: '#fff', borderRadius: 20,},

//     //Boutons

//     ViewBtn1: { flex: 2,},

//     btn1: { backgroundColor: '#0F0BAE', borderRadius: 20, width: 150, height: 40, padding: 5, alignSelf: 'center', },

//     ViewBtn2: { flex: 3, },

//     btn2: { alignSelf: 'center',},

//     BtnBlack: { backgroundColor: '#000', borderRadius: 30, width: '90%', height: 50, padding: 5, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center',},

//     BtnLogBlack: { backgroundColor: '#000', borderRadius: 20, width: '80%', height: 40, padding: 5, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center',},

//     BtnLogBlue: { backgroundColor: '#0F0BAE', borderRadius: 20, width: '80%', height: 40, padding: 5, alignSelf: 'center',},

//     BtnBlack2: { backgroundColor: '#000', borderRadius: 40, width: '85%', height: 55, padding: 2, alignSelf: 'center', alignItems: 'flex-start', },

//     btnImportPhoto: { width: 30, height: 30, resizeMode: 'contain', },

//     ViewBtn3: { flex: 4, flexDirection: 'row', alignSelf: 'center', },

//     ViewBtn4: { flex: 5, alignSelf: 'center', flexDirection: 'row', },

//     ViewBtn5: { alignSelf: 'center', },

//     ViewBtn6: { flex: 5, alignSelf: 'center', flexDirection: 'row', },

//     ViewBtn7: { flex: 5, top: -80, alignSelf: 'center', flexDirection: 'row', },

//     ViewBtn8: { flex: 2, top: 130, alignSelf: 'center', },

//     ViewBtnLog: { flex: 3, },

//     textBtn: { color: '#fff', fontSize: 20, textAlign: 'center', alignSelf: 'center', fontFamily:'Comfortaa-Bold' },

//     ViewBTNSelect: { flex: 3, top: 100, },

//     ViewBTNSelect2: { flex: 3, },

//     ViewBtnRow: { flexDirection: 'row', justifyContent: 'space-around', },

//     ViewTextChoice: { flex: 4, },

//     textBtnBlue: { color: '#0F0BAE', width: '80%', fontSize: 20, textAlign: 'center', alignSelf: 'center', textDecorationLine: 'underline', },

//     textBtnBlue2: { color: '#0F0BAE', width: '80%', fontSize: 16, textAlign: 'left', textDecorationLine: 'underline', },

//     textBtnBlue3: { color: '#0F0BAE', fontSize: 20, textAlign: 'center', textDecorationLine: 'none', },

//     textBtn2: { color: '#fff', fontSize: 20, textDecorationLine: 'underline', textAlign: 'center', },

//     textBtn3: { color: "#fff", fontSize: 22, textAlign: "center", alignSelf:'flex-end', marginRight:60, textDecorationLine:'underline', fontFamily:'Comfortaa-Bold'},

//     textBtn4: { color: "#fff", fontSize: 22, textAlign: "center", textDecorationLine:'underline', fontFamily:'Comfortaa-Regular', },

//     textBtn5: { color: '#000', fontSize: 20, textAlign: 'center', },

//     textBtn6: { color: '#fff', fontSize: 22, textAlign: 'center', fontFamily:'Comfortaa-Regular', },

//     textBtn7: { color: '#fff', fontSize: 16, textAlign: 'left', },

//     textBtn8: { color: '#fff', fontSize: 14, width: '80%', textDecorationLine: 'underline', alignSelf: 'center', textAlign:'center', },

//     textBtn9: { color: '#0F0BAE', fontSize: 22, textAlign: 'center', fontFamily: 'Comfortaa-Regular', },

//     textBtn10: { color: '#fff', fontSize: 20, textAlign: 'center', fontFamily:'Comfortaa-Regular', },

//     textBtnModal: { color: '#0F0BAE', backgroundColor: '#fff', width: 120, height: 50, padding: 12, fontSize: 18, textAlign: "center", borderWidth: 3, borderColor: '#0F0BAE', borderRadius: 30, alignSelf: 'center',},

//     textBtnModalAcc: { color: '#fff', backgroundColor: '#0F0BAE', width: 120, height: 50, padding: 12, fontSize: 18, textAlign: "center", borderWidth: 3, borderColor: '#0F0BAE', borderRadius: 30, alignSelf: 'center', },

//     SelectedText: { textAlign: 'center', color: '#0F0BAE', },

//     NotSelectedText: { textAlign: 'center', color: '#FFF', },

//     btnSelected: { color: "#0F0BAE", backgroundColor: "transparent", width: 350, height: 50, padding: 12, fontSize: 18, textAlign: "center", borderWidth: 3, borderColor: '#0F0BAE', borderRadius: 30, alignSelf: 'center', },

//     btnNotSelected: { color: "#fff", backgroundColor: "transparent", width: 350, height: 50, padding: 12, fontSize: 18, textAlign: "center", borderWidth: 1, borderColor: '#0F0BAE', borderRadius: 30, alignSelf: 'center', },

//     imgBtn2: { width: 50, height: 50, },

//     ImgBulle: { width: 100, height: 100, resizeMode: 'cover', alignSelf: 'center', },

//     ImgMessage: { width: 50, height: 50, resizeMode: 'contain', borderRadius: 50, borderWidth: 2, borderColor: '#0DCFE6', backgroundColor: '#0DCFE6', },

//     imgCard: { width: 200, height: 120, alignSelf: 'center', marginTop: 10, },

//     icoBtn: { marginRight: 200, },

//     imgPhoto: { width: 150, height: 150, alignSelf: 'center', resizeMode: 'contain', marginTop: 20, borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 20, },

//     //TextInput

//     radioInputContainer: { flexDirection: 'row', alignItems: 'center',},

//     radioInputContainerTwo: { flexDirection: 'row', width: '80%', alignItems: 'center', marginVertical: 5, alignSelf: 'center', },

//     radioInputIcon: { width: 20, height: 20, marginRight: 10, },

//     radioInputLabel: { fontSize: 16, },

//     ViewInput: { flex: 2, top: '10%',},

//     ViewInputDate: { flex: 2, alignSelf: 'center', },

//     ViewInputPrenom: { flex: 3, top: 280, width: '100%', alignSelf: 'center', },

//     ViewInputPrenom2: { flex: 2, width: '100%', alignSelf: 'center', },

//     ViewInputEmail: { top: 100, },

//     imgPrenomAdv: { width: 70, height: 70, top: -200, },

//     InputDates: { borderWidth: 2, borderColor: '#0F0BAE', borderRadius: 50, height: 200, width: 300, textAlign: 'center', },

//     InputDate: { textAlign: 'center', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', color: '#FFF', },

//     TextInput: { color: '#FFF', fontSize: 18, alignSelf: 'center', width: '80%', textAlign: 'center', borderWidth: 2, borderColor: '#FFF', borderRadius: 30, padding: 15, },

//     TextInputTwo: { color: '#FFF', fontSize: 14, padding: 15, },

//     TextInputEmail: { color: '#FFF', fontSize: 18, alignSelf: 'center', width: '80%', textAlign: 'center', borderWidth: 2, borderColor: '#FFF', borderRadius: 30, padding: 15, top: 50, },

//     TextInputPassword: { color: '#FFF', fontSize: 18, alignSelf: 'center', width: '80%', textAlign: 'center', borderWidth: 2,
//     borderColor: '#FFF', borderRadius: 30, padding: 15,},

//     ViewInputRadioLang: { flexDirection: 'row', marginLeft: 50, top: -200, },

//     btnInputLang: { flexDirection: 'row', alignItems: 'center', marginTop: 20, },

//     SelectedImage: { width: 20, height: 20 },

//     textBtnInputLang: { marginLeft: 10, color: '#FFF', fontSize: 16 },

//     // Modal

//     centeredView: { flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', },

//     centeredView2: { flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', },

//     centeredView3: { flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', },

//     centeredView4: { flex: 3, borderTopLeftRadius: 40, borderTopRightRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', },

//     centeredView5: { flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', },

//     modalView: { width: '100%', height: '50%', margin: 20, borderRadius: 20, padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5,},

//     // Screens

//     ViewVideo: { flex: 3, alignItems: 'center', },

//     video: { width: 300, height: 170, backgroundColor: '#fff', },

//     videoCredits: { width: '100%', height: '50%', backgroundColor: "#000", resizeMode: 'cover', },

//     CntBtnVideo: { flexDirection: 'row', },

//     btnVideo: { width: 30, height: 45, top: -110, },

//     btnNext: { width: 80, height: 80, },

//     ViewRadio: { flex: 3, marginTop: 200, marginLeft: 20,},

//     ViewImg: { flex: 3, },

//     BlockImg: { width: 130, height: 130, borderRadius: 100, padding: 20, backgroundColor: '#FFF', alignSelf: 'center', },

//     ViewScroll: { height: 150, width: 160, alignSelf: 'center', },

//     ViewFlatlist: { height: 130,},

//     //  Boutons Scroll Up and Down
//     barreScrollBtn: { backgroundColor: '#FFF', top: -130, height: 100, left: 287, width: 4, },

//     ScrollBtnDown: { left: 280, top: -140, },

//     ScrollBtnUp: { left: 280,top: 25,},

//     // Ligne

//     line: { backgroundColor: '#0F0BAE', height: 2, width: '70%', alignSelf: 'center', margin: 15,},
// });
