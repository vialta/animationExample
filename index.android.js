/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  TouchableNativeFeedback,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
  import AnimatedSprite from 'react-native-animated-sprite';
  import flareSprite from './flareSprite';

export default class animationExample extends Component {

  constructor(){
    super();
    this.state={
      tweenOptions:{} 
    }
  }

  tweenSprite(x1,y1,x2,y2){

    const startCoords={
      top:y1,
      left:x1
    };
    this.setState({
      tweenOptions: {
        tweenType: 'sine-wave',
        startXY: [startCoords.left,startCoords.top],
        xTo:[x2],
        yTo: [y2],
        duration: 1500,
        loop: false,
      }
    }, () => {
      this.refs.cornerSprite.startTween();
    });
  }

  specialTween(x1,y1,x2,y2,x3,y3){
    const startCoords={
      top:y1,
      left:x1
    };
    this.setState({
      tweenOptions: {
        tweenType: 'sine-wave',
        startXY: [startCoords.left,startCoords.top],
        xTo:[x2,x3],
        yTo: [y2,y3],
        duration: 3000,
        loop: false,
      }
    }, () => {
      this.refs.cornerSprite.startTween();
    });
  }

  render() {

    var windowWidth = Dimensions.get('window').width;
    var windowHeight = Dimensions.get('window').height;

    return (
      <View style={{backgroundColor:'#bbbbbb'}}>
        
        
         <Svg height={windowHeight} width={windowWidth}>
           {/* Top Down Line */}
        <Line
        x1={windowWidth*0.4}
        y1={windowHeight*0.5}
        x2={windowWidth*0.4}
        y2={windowHeight*0.75}
        stroke="#0000ff"
        strokeWidth="2"
        />
           {/* Top Down Right Line */}
         <Line
        x1={windowWidth*0.4}
        y1={windowHeight*0.5}
        x2={windowWidth*0.8}
        y2={windowHeight*0.75}
        stroke="#0000ff"
        strokeWidth="2"
        />
        </Svg>

        {/* */}
        {/* Animation */}
        <AnimatedSprite
        ref={'cornerSprite'}
        sprite={flareSprite}
        animationFrameIndex={flareSprite.animationIndex('MOVE')}
        loopAnimation={false}
        coordinates={{
          top:windowHeight*0.75,
          left:windowWidth*0.8
        }}
        size={{
          width:windowWidth*0.1,
          height:windowWidth*0.1
        }}
        draggable={false}
       tweenOptions = {this.state.tweenOptions}
        tweenStart={'fromMethod'}
        />

        {/* CENTER */}
        <View style={{position:'absolute',backgroundColor:'#ff0000', width:windowWidth*0.3, height:windowWidth*0.3, borderRadius:windowWidth*0.15, top:windowHeight*0.5-windowWidth*0.15, left:windowWidth*0.25}}>
        </View>
        {/* BOTTOM */}
         <View style={{position:'absolute',backgroundColor:'#ff0000', width:windowWidth*0.3, height:windowWidth*0.3, borderRadius:windowWidth*0.15, top:windowHeight*0.75-windowWidth*0.15, left:windowWidth*0.25, alignItems:'center', justifyContent:'center'}}>
          <TouchableNativeFeedback 
              onPress={ () => {this.tweenSprite(windowWidth*0.35,windowHeight*0.75-windowWidth*0.05,windowWidth*0.35,windowHeight*0.5-windowWidth*0.05)}} underlayColor='#ff0000'
              onLongPress={ () => {this.specialTween(windowWidth*0.35,windowHeight*0.75-windowWidth*0.05,windowWidth*0.35,windowHeight*0.5-windowWidth*0.05,windowWidth*0.75,windowHeight*0.75-windowWidth*0.05)}}
            >
            <Text>Press Me</Text>
          </TouchableNativeFeedback>
        </View>
        {/* CORNER */}
        <View 
          style={{position:'absolute',backgroundColor:'#ff0000', width:windowWidth*0.3, height:windowWidth*0.3, borderRadius:windowWidth*0.15, top:windowHeight*0.75-windowWidth*0.15, left:windowWidth*0.65, alignItems:'center', justifyContent:'center'}}
        >
          <TouchableNativeFeedback 
            onPress={     () => {this.tweenSprite (windowWidth*0.75,windowHeight*0.75-windowWidth*0.05,windowWidth*0.35 ,windowHeight*0.5-windowWidth*0.05)}} 
            onLongPress={ () => {this.specialTween(windowWidth*0.75,windowHeight*0.75-windowWidth*0.05,windowWidth*0.35 ,windowHeight*0.5-windowWidth*0.05,windowWidth*0.35,windowHeight*0.75-windowWidth*0.05)}}
            underlayColor='#ff0000'>
            <Text>Press Me</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('animationExample', () => animationExample);
