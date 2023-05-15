import {React, useState} from 'react';
import { Text, View, ScrollView, Button, StyleSheet} from 'react-native';
import {AppBar} from '@react-native-material/core'

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true)
  return (
    <><View style={styles.cat}>
      <Text>My name is {props.name} and I'm {isHungry ? "hungry" : "full"}</Text>
      <Button onPress={() => {
        setIsHungry(false);
      } } disabled={!isHungry}
        title={isHungry ? "Нахрани ме" : "Mrrr..."}></Button>
    </View>
    <View style={styles.button}>
        <Button  onPress={() => {
          setIsHungry(true);
        } } disabled={isHungry}
          title={isHungry ? "Mrrr..." : "Стани гладен"}></Button>
      </View></>
  );
};

const Main = () => {
  return (
    <><AppBar title="OVPN Connect " />
      <ScrollView>
        <Cat name="Jigo" />
        
      </ScrollView>
      
      </>
      
      
  )
};

const styles = StyleSheet.create({
  cat: {
    padding: 20
    
  },
  button: {
    
    padding: 20
    
  },
  
})
export default Main;

