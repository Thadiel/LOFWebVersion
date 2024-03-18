
import { Link } from "expo-router";
import { StyleSheet, Pressable, Text, View, Dimensions } from "react-native";
import Navbar from "./components/navbar";
import Chart from "./components/chart";

import LogBG from '../assets/NewLog.svg'
import MapBG from '../assets/NewMap.svg'
import FieldBG from '../assets/NewField.svg'

const sand = '#e3c088';
const lightblue = '#68c8cb';
const blue = '#3a899b';
const darkblue = '#191516';
//
export default function HomePage() {
  return (
    <View>
        <Navbar/>
        <Link href="/map" asChild>
        <Pressable style={styles.map}>
            <MapBG width={Dimensions.get("screen").width} height={Dimensions.get('screen').width*1.4}/>
            <Text style={[styles.text, { left: '5%' }]}>Explore Map</Text>
        </Pressable>
        </Link>
        <Link href="/guidebook/" asChild>
        <Pressable style={styles.guide}>
            <FieldBG width={Dimensions.get("screen").width} height={Dimensions.get('screen').width}/>
            <Text style={[styles.text, { left: '55%' }]}>Field Guide</Text>
        </Pressable>
        </Link>
        <Pressable style={styles.log}>
            <LogBG width={Dimensions.get("screen").width} height={Dimensions.get('screen').width*1.23}>
            </LogBG>
        </Pressable>
        
        <View style={styles.footer} />
        <Chart/>
    </View>
  );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: blue
    },
    map: {
        position: 'absolute',
        top: '8vh'
    },
    guide: {
        position: 'absolute',
        top: '20vh'
    },
    log: {
        position: 'absolute',
        top: '35vh',
        width: '100vw'
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        fontWeight:'bold',
        top: '5vh',
        left: '10vh'
    },
    footer: {
        position: 'absolute',
        top: '80vh',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        height: '28vh',
        width: '100vw',
        backgroundColor: sand
    }
})