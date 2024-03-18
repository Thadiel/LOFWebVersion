import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Treasure() {
    return (
        <View style={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <Navbar />
            <ScrollView>
                <View style={styles.outside}>
                    <View style={styles.container}>
                    <Text style={styles.title}>Crescent Bay</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.item}>Crescent Bay South was one of the first locations covered by Tidewater Docents. However, LOF started providing staff coverage at Crescent Bay North in 2018. Just off the coast of Crescent Bay is Seal Rock which is protected by both city and federal law under the National Wilderness Preservation System. Seal Rock is a known breeding habitat for Sea Lions and California Brown Pelicans.</Text>
                    <Text style={styles.item}>Has a moderate visitor count, due to the angle of Crescent Bay North, waves rarely crash onto the tidepool areas. Crescent Bay South connects to Shaw's Cove North so there can be overlap amongst tidepool education</Text>
                    <Text style={styles.item}>Access Point: Circle Dr. (Steps) and Cliff Dr. (Ramp)</Text>
                    <Text style={styles.item}>Recommended Parking: Residential parking along Cliff Dr.</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: sand, width: '100vw', height: '5vh'}}></View>
            </ScrollView>
        </View>
    );
}

styles = StyleSheet.create({
    outside: {
        backgroundColor: blue,
        minHeight: '85vh',
        minWidth: '100vw'
    },
    container: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingBottom: 20
    },
    title: {
        color: '#064777',
        margin: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 35
    },
    line: {
        borderColor: 'lightblue',
        borderWidth: .5,
        marginHorizontal: 10
    },
    bubble: {
        borderRadius: 10,
        borderColor: 'lightblue',
        borderWidth: '1',
        margin: 20,
        padding: 5
    },
    bubTitle: {
        color: '#064777',
        fontSize: 20,
        margin: 10
    },
    item: {
        margin: 5,
        color: '#064777',
        fontSize: 20,
        marginHorizontal: 10
    }
});