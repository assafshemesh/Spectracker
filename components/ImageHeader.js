import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

const ImageHeader = ({ route, navigation }) => {
  const { username }= route.params;
  const lastPatient = 'ירדן';
//   const patientImage = {require('../assets/Yardeni.jpg')};
  return (
    <View style={styles.header}>
        <View style={styles.imageContainer}>
            <ImageBackground style={styles.headerImage} source={require('../assets/Yardeni-cropped01.jpg')}>
                <Text style={styles.text}>שלום 
                    <Text style={styles.name}> { username }</Text>
                    , {"\n"}המטופלת שלך היא  <Text style={styles.name}>{lastPatient}</Text>
                    {/* . המטופלת שלך היא <Text style={styles.name}>{lastPatient}</Text> */}
                </Text>
                    {/* <Text style={styles.text}>Welcome
                        <Text style={styles.name}> { username }</Text>
                        , {"\n"}Your patient is <Text style={styles.name}>{lastPatient}</Text>
                    </Text> */}
            </ImageBackground>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.8,
    backgroundColor: 'darkslateblue',
    justifyContent: 'center',
  },
  imageContainer: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: 'pink',
  },
//   textContainer: {
//      flex: 1,
//   },
  headerImage: {
     flex: 1,
    //  justifyContent: 'flex-end',
     resizeMode: 'cover',

    },
  text: {
    //  backgroundColor: 'rgba(72, 61, 139, 0.7)',
    //  color: '#fff',
     color: 'darkslateblue',
     fontSize: 18,
     fontFamily: 'sans-serif-light',
     lineHeight: 32,
     paddingLeft: 10,
    //  textAlign: 'center',
    marginRight: 30,
    marginTop: 50,
  },
  name: {
    //  color: '#fff',
     color: 'darkslateblue',
     fontWeight: 'bold',
     fontSize: 18,
  },
})

export default ImageHeader;