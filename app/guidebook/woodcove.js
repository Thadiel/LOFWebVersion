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
        <View style={{ flexDirection: 'column', height:'100vh',width:'100vw' }}>
            <Navbar />
            <ScrollView>
                <View style={styles.outside}>
                    <View style={styles.container}>
                    <Text style={styles.title}>Wood Cove</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.item}>Woods Cove is best accessed via Diamond Street and PCH – right next to the onetime residence of Bette Davis. It’s important to note that this beach is really best explored at low tides and can sometimes disappear altogether when the tide is high.</Text>
                    <Text style={styles.item}>Has a moderate visitor count, at the north end of the cove, you’ll find the deep tide pools of Cactus Point – a rock outcropping which is home to Orange County’s only blow hole. </Text>
                    <Text style={styles.item}>Access Point: Diamond St. or Pearl St.</Text>
                    <Text style={styles.item}>Recommended Parking: Residential parking along Ocean Way and Diamond St.</Text>
                    </View>
                </View>
                <View style={{backgroundColor:sand, width:'100vw',height:'5vh'}}></View>
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