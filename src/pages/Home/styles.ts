import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
    color: '#C85656'
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    paddingBottom: 32

  },
  map: {
    width: '100%',
    height: '100%',
  }, 
  mapMarker: {
    width: 110,
    height: 100,
  },
  mapMarkerContainer: {
    width: 110,
    height: 70,
    // backgroundColor: '#F2ECC2',
    padding: 2,
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#C85656',
    fontSize: 13,
    lineHeight: 23,
    backgroundColor: '#F2ECC2',
    borderRadius: 2,

  },

})

export { styles };