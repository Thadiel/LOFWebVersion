import { AntDesign } from "@expo/vector-icons";
import Navbar from "../components/navbar";
import { Link } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516a';

export default function Heisler() {
    return (
        <View style={{ flexDirection: 'column', height: '100vh', width: '100vw' }}>
            <Navbar />
            <ScrollView>
                <View style={styles.outside}>
                    <View style={styles.container}>
                    <Text style={styles.title}>Heisler Park</Text>
                    <Text style={styles.title}>(Main Beach)</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.item}>LOF began providing education at Heisler Park in June of 2009 along the northern end of Main Beach up to Monument Point. We now only provide education at the tidepools located in front of Bird Rock which is part of the California National Coastal Monument. First built in 1896, a pier once connected the mainland to Bird Rock island. However, it was destroyed in 1939 from a passing storm.</Text>
                    <Text style={styles.item}>Has a high visitor count, access to tidepools is mainly from the direction of Main Beach. It's recommended to set out your display and stand where everyone has to walk by in order to get to the tidepools. (see image below)</Text>
                    <Text style={styles.item}>Access Point: Stairs in front of Las Brisas or Main Beach</Text>
                    <Text style={styles.item}>Recommended Parking: North of PCH along Aster St. or Cypress Dr. (metered parking along Cliff Dr.)</Text>
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