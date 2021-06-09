import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Point } from "../Home/index";
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from "react-native-gesture-handler";
import openMap from 'react-native-open-maps';
import markerImage from '../../../assets/marker.png'
import { styles } from "./styles";


const Detail = () => {
  const route = useRoute();
  const routeParams = route.params as Point;
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routeParams.nome}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.blockContent}>
          <Text style={styles.titleInfo}>Você pode encontrar essa bike em: </Text>
          <Text>{routeParams.localizacao} - {routeParams.bairro}</Text>
        </View>

        <View style={styles.blockContent}>
          <Text style={styles.titleInfo}>Quantidades de bikes: </Text>
          <Text>{routeParams.capacidade}</Text>
        </View>

      </View>
    
      <View>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: routeParams.lat,
                longitude: routeParams.lon,
                latitudeDelta: 0.006,
                longitudeDelta: 0.006,
              }}
              scrollEnabled={false}
            >
                <Marker
                  coordinate={{
                    latitude: routeParams.lat,
                    longitude: routeParams.lon,
                  }}
                  style={styles.mapMarker}
                  
                  key={routeParams._id}

                >
                  <View style={styles.mapMarkerContainer}> 
                    
                    <Image
                      style={styles.mapMarkerImage}
                      source={markerImage}
                    />
                    <Text style={styles.mapMarkerTitle}>{routeParams.nome}</Text>
                  </View>
                </Marker>
              
            </MapView>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mapsButton} onPress={() =>  openMap({
           latitude: routeParams.lat,
           longitude: routeParams.lon,
           end: `${routeParams.lat},${routeParams.lon}`,
           travelType: 'drive',
        })}>
          <Text style={styles.mapsButtonText}>Abrir no Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { Detail };