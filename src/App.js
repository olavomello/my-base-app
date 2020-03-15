import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Others
import Configs from './Configs';
import Background from './components/Background';
import FacebookButton from './components/FacebookButton';

// Splashscreen
import Lottie from 'lottie-react-native';
import animSplash from './assets/animSplash.json';

export default class App extends React.Component {
  render(){
    return (    
      <Background colors={Configs.BGCOLOR}>  
        <Lottie 
          source      = {animSplash}  
          resizeMode  = 'contain'
          autoSize
          style       = {
                          {
                            width:'100%',
                            height:'100%'
                          }
                        }
        >
          <FacebookButton/>
        </Lottie>
      </Background>
    );
  }
}
