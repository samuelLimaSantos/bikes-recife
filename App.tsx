import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Routes } from './src/pages/Routes';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { SplashScreen } from './src/pages/SplashScreen';


export default function App() {

  const [ fakeLoading, setFakeLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 3000)
  }, [])

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <SplashScreen />
  // }
  
  return (
    <>
      <StatusBar translucent />

      {fakeLoading ? <SplashScreen /> : <Routes />}
      {/* <Routes /> */}
    </>
  );
}

