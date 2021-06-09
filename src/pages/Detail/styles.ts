import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
    // justifyContent: 'center'
    // backgroundColor: '#F2ECC2'
  },
  title: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 32,
    color: '#C85656',
    marginVertical: 24
  },
  contentContainer: {
  },
  blockContent: {
    marginBottom: 16
  },
  titleInfo: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginBottom: 6
  },
  buttonsContainer: {
    flex: 1,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  backButton: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C85656',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#C85656',
    fontFamily: 'Roboto_500Medium'
  },
  map: {
    width: '100%',
    height: 300,
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
  mapsButton: {
    height: 40,
    width: 150,
    borderRadius: 8,
    backgroundColor: '#C85656',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapsButtonText: {
    color: '#fff',
    fontFamily: 'Roboto_500Medium'
  },
});

export { styles };