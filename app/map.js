import Navbar from "./components/navbar";
import { Pressable, StyleSheet, View, Text } from "react-native";
import MapView from '@teovilla/react-native-web-maps';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function MapPage() {
    return (
        <View>
            <Navbar />
            <View style={{ backgroundColor: blue, minHeight: '90vh' }}>
                <View style={styles.container}>
                    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
                        <Map defaultCenter={{ lat: 22.54992, lng: 0 }}
                            defaultZoom={3}
                            gestureHandling={'greedy'}
                            disableDefaultUI={true}>
                        </Map>
                    </APIProvider>
                </View>
            </View>
            <View style={styles.footer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        justifySelf: 'center',
        alignItems: 'center',
        display: 'grid',
        height: '80vh',
        margin: 30,
        width: '80vw',
        backgroundColor: 'grey',
        borderRadius: 20

    },
    footer: {
        position: 'absolute',
        top: '98vh',
        height: '2vh',
        width: '100vw',
        backgroundColor: sand
    },
    legend: {
        position: 'absolute',
        backgroundColor: 'rgba(17, 53, 69, 0.6)',
        borderRadius: 20,
        height: '12%',
        width: '40%',
        justifyContent: 'center',
        gap: 10,
        top: '5%',
        left: '11%',
        padding: 8,
    },
    legendBubble: {
        borderRadius: '20',
        height: '100%',
        width: '12%',
        borderColor: 'black',
        borderWidth: 1
    },
    map: {
        height: '100vh',
        width: '100vw'

    },
    contextButton: {
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: 'black',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        top: '2%',
        left: '80%'
    },
    formbutton: {
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: '#008080',
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        top: '82%',
        left: '65%'

    },
    mpabutton: {
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: '#008080',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        top: '82%',
        left: '20%'

    },
    cambutton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#035252',
        height: 110,
        width: 110,
        top: '75%',
        left: '37%'
    }

});