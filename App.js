import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image,Dimensions} from 'react-native';

export default function App() {

  const[number,setNumber] = useState();
  const[inverse,setInverse]=useState();

  const numberInputHandler= inputText =>{
    setNumber(inputText);
  };

  const inverseHandler = () =>{
    const chosenNumber= parseInt(number);
    const inverse=(1/chosenNumber);
    
        setInverse(inverse);
    
  }

  const resetInputHandler = () =>{
    setNumber();
  };

  return (
      <View style={styles.container}>
      <Text>Enter any number!</Text>
      <TextInput 
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="number-pad"
      style={styles.input} 
      onChangeText={numberInputHandler}
      value={number}
      />

      <View style={styles.buttonContainer}>
          <View>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color='#ff5f40'
            />
          </View>
          <View>
            <Button
              title="Confirm"
              onPress={inverseHandler}
              color='#c4fb6d'
              // '#f5ba13'
            />
          </View>
      </View>

      <View style={styles.inverseContainer}>
        <View >
           <Text style={styles.inverseText}> The Multiplicative Inverse is :</Text>
        </View>
        <View >
           <Text style={styles.inverseResult}> {inverse}</Text>
        </View>
      </View>

      
     
      

      <View style={styles.byLines}>
      <Text> created by:</Text>
      <Text> SAHIL JAIN</Text>
      <Text> 2018BTCS070</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image 
        source={require('./assets/sj.jpg')}
        style={styles.image}
      />
       </View>
       
       <StatusBar style="auto" />
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:30,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    marginVertical:10
},
buttonContainer: {
  flexDirection: 'row',
  width: '60%',
  justifyContent: 'space-between',
  paddingHorizontal: 15
},
inverseContainer:{
  marginTop:50,
  textAlign:'center',
  fontSize:22
},
inverseText:{
textAlign:'center',
fontSize:18
},
inverseResult:{
  marginTop:40,
  textAlign:'center',
  fontSize:30,
},
byLines:{
  marginTop:30,
  // justifyContent:'flex-end',
  // alignItems:'flex-end',
  textAlign:'center'
},
imageContainer:{
    // width:300,
    // height:300,
    // borderRadius:150,
    width:Dimensions.get('window').width * 0.175,
    height:Dimensions.get('window').width * 0.175,
    borderRadius:Dimensions.get('window').width * 0.175 / 2,
    borderWidth:3,
    borderColor:'black',
    overflow:'hidden',
    // marginVertical:30,
    marginVertical:Dimensions.get('window').height / 20
},
image:{
    width:'100%',
    height:'100%'
}
});
