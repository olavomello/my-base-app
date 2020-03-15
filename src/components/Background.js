import React from 'react';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Background extends React.Component {

  render(){

    // Component content
    const content   =   this.props.children;
    // Color
    const colors    =   ( this.props.colors ? this.props.colors : ["#f0f0f0","#d0d0d0"] );

    return (
          <SafeAreaView 
              style={
                      {
                        flex:1, 
                        alinItems:'center', 
                        justifyContent:'center'
                      }
          }>
              <LinearGradient
                start   = {{x: 0, y: 0.25}} 
                end     = {{x: 1, y: 0.05}} 
                colors  = {colors}
                style   = {
                            { 
                              flex: 1,
                              justifyContent: 'center',
                              padding: 10
                            }
                          }
                  >
                  {content}
              </LinearGradient>
          </SafeAreaView>
          );
  }
}