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
                    <Text style={styles.title}>Goff Island</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.item}>Historically, the Treasure Island Seashore (both Treasure Island and Goff Island) had limited public use due to restricted access. With the completion of the Montage Resort and Spa in 2003, three access points became available to the general public, and our TideWater Docent Program began along the Treasure Island Seashore. Three years later, in June 2006, paid staff started providing education at Treasure Island and Tidewater Docents continued providing education at Goff Island. Goff Island is also home to Goff Island Rock which is protected and visitor's are prohibited from climbing it.</Text>
                    <Text style={styles.item}>Has a moderate vistor count, harbor seals are often present which requires the tidepools to be closed to the public</Text>
                    <Text style={styles.item}>Access Point: Montage Park (stairs or ramp) </Text>
                    <Text style={styles.item}>Recommended Parking: Montage Parking Lot (permit required) or Wesley Drive</Text>
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