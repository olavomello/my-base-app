import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import iconFacebook from '../assets/icon-facebook.svg';

const FacebookButton = () => {  

  // Const
  const btLabel  = "Login com Facebook";

  return(
    <View>
      <LinearGradient
            colors  = {['#3b5998','#2a4785']}
            style   = {style.btLogin}
          >
          <Text
            style={style.btTxt}>
              <iconFacebook
                width  = {25}
                height = {25} 
                style  = {style.btIcon}
              />{btLabel}
          </Text>
      </LinearGradient>
    </View>
  );
}
/* Style */
const style = StyleSheet.create({
  btLogin:{
    padding: 12, 
    alignItems: 'center', 
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,                 
  },
  btTxt:{
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#ffffff',
    textShadowColor:'#000000'   
  },
  btIcon:{
    width : 25,
    height: 25,
    paddingRight:40,
    resizeMode: 'stretch',
    fill:'#ffffff'
  },
});

export default FacebookButton;