import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Shaws() {
    return (
        <View style={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <Navbar />
            <ScrollView>
                <View style={styles.outside}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Shaws Cove</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.item}>Shaw's Cove is a popular destination for divers due to the high probability of seeing aquatic life and its proximity to the kelp forest.</Text>
                        <Text style={styles.item}>Has a low visitor count, shaw's Cove North connects to Crescent Bay South so there can be overlap amongst tidepool education</Text>
                        <Text style={styles.item}>Access Point: Fairview St. & Cliff Dr. (stairs) </Text>
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