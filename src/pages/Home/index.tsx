import React, { useState, useEffect } from "react";
import { View, Text, Alert, Image } from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import api from "axios";
import markerImage from '../../../assets/marker.png'
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export interface Point {
  _id: number;
  nome: string;
  bairro: string;
  localizacao: string;
  capacidade: number;
  lat: number;
  lon: number;
}


const Home = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [points, setPoints] = useState<Point[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api
      .get(
        'http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=e6e4ac72-ff15-4c5a-b149-a1943386c031'
      )
      .then((response) => {
        setPoints(response.data.result.records);
      });
  }, []);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Ooooops...',
          'Precisamos de sua permissão para obter a localização'
        );

        return;
      }

      const location = await Location.getCurrentPositionAsync();

      let { latitude, longitude } = location.coords;

      if (latitude === 37.4219464 && longitude === -122.083854) {
        latitude = -8.0604158;
        longitude = -34.9396259;
      }

      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);


  return (
    <View style={styles.container}>
       <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de bicicleta em Recife.
        </Text>
      <View style={styles.mapContainer}>
      {initialPosition[0] !== 0 && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
              mapType='standard'
            >
              {points.map((point) => (
                <Marker
                  coordinate={{
                    latitude: point.lat,
                    longitude: point.lon,
                  }}
                  style={styles.mapMarker}
                  onPress={() => {
                    navigation.navigate('Detail', point)
                  }}
                  key={point._id}

                >
                  <View style={styles.mapMarkerContainer}>
                    <Image
                      style={styles.mapMarkerImage}
                      source={markerImage}
                    />
                    <Text style={styles.mapMarkerTitle}>{point.nome}</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          )}
      </View>
    </View>
  )
}

export { Home }; 