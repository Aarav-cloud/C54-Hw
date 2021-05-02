import React,{Component} from 'react';
import { Text, View, StyleSheet,Button,Alert} from 'react-native';


// You can import from local files


// or any pure javascript modules available in npm


export default class App extends Component{
  render  (){
  return (
    <View>
    <View style={{width:200,height:100,marginTop:80}}>
     <Button
     title = "sound1"
     color = "blue"
     onPress = {()=>Alert.alert('play sound1')}/>
    </View>

     <View style={{width:200,height:100,marginTop:80}}>
     <Button
     title = "sound2"
     color = "green"
     onPress = {()=>Alert.alert('play sound1')}/>
    </View>

     <View style={{width:200,height:100,marginTop:80}}>
     <Button
     title = "sound3"
     color = "red"
     onPress = {()=>Alert.alert('play sound1')}/>
    </View>

     <View style={{width:200,height:100,marginTop:80}}>
     <Button
     title = "sound4"
     color = "orange"
     onPress = {()=>Alert.alert('play sound1')}/>
    </View>

    </View>
  );
}
}

