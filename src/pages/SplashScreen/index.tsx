import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import logo from '../../../assets/marker.png'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} />
    </View>
  )
}


export { SplashScreen };