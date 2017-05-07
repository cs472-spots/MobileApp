// CheckIn Screen JS code

import React, { Component } from 'react';
import { 
    AppRegistry, 
    StyleSheet, 
    View, 
    Image, 
    Dimensions,
    Text } from 'react-native';
import BottomNav from './BottomNav';
import MapView from 'react-native-maps';
import CustomCallout from './CustomCallout';
import markerTaken from './images/marker_taken.png';
import markerVacant from './images/marker_vacant.png';
import io from 'socket.io-client/dist/socket.io';

window.navigator.userAgent = 'ReactNative';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 36.111603;
const LONGITUDE = -115.141350;
const LATITUDE_DELTA = 0.0007;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const START1AT = 36.111743;
const START1ON = -115.140990;
const START1NUM = 16;
const START1ROT = 0;
const START2AT = 36.1117100;
const START2ON = -115.140990;
const START2NUM = 10;
const START2ROT = 180;
const START3AT = 36.1115700;
const START3ON = -115.140990;
const START3NUM = 10;
const START3ROT = 0;
const START4AT = 36.1115350;
const START4ON = -115.140990;
const START4NUM = 10;
const START4ROT = 180;
const START5AT = 36.1113750;
const START5ON = -115.140990;
const START5NUM = 15;
const START5ROT = 0;
const START6AT = 36.1115250;
const START6ON = -115.141680;
const START6NUM = 4;
const START6ROT = 180;
const START7AT = 36.1115600;
const START7ON = -115.141680;
const START7NUM = 4;
const START7ROT = 0;
const START8AT = 36.1117050;
const START8ON = -115.141620;
const START8NUM = 5;
const START8ROT = 180;
const START9AT = 36.111733;
const START9ON = -115.140930;
const START9NUM = 7;
const START9ROT = 90;
const START10AT = 36.1113550;
const START10ON = -115.140770;
const START10NUM = 19;
const START10ROT = 180;
const SPACE = 0.00006;

export default class CheckIn extends Component {

    constructor(props) {
        super(props);
        this.socket = io('https://unlv-spots.herokuapp.com/', {jsonp: false});
        this.state = {

            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        
            free: '#',
            total: 100,
            marker: null,
            tMarkers: [],
            interval: 0,
        };
    }; 

    RecieveSpots() {
        this.socket.on('reply', (spots)=> {
            
        })
    }

    componentWillMount() {
        var i;
        var count = 0;
        // Initialize Spots
        for(i = 0; i < START1NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START1AT,
                    longitude: START1ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START1ROT
                }
            )
            count++;
        }
        for(i = 0; i < START2NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START2AT,
                    longitude: START2ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START2ROT
                }
            )
            count++;
        }
        for(i = 0; i < START3NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START3AT,
                    longitude: START3ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START3ROT
                }
            )
            count++;
        }
        for(i = 0; i < START4NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START4AT,
                    longitude: START4ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START4ROT
                }
            )
            count++;
        }
        for(i = 0; i < START5NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START5AT,
                    longitude: START5ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START5ROT
                }
            )
            count++;
        }
        for(i = 0; i < START6NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START6AT,
                    longitude: START6ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START6ROT
                }
            )
            count++;
        }
        for(i = 0; i < START7NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START7AT,
                    longitude: START7ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START7ROT
                }
            )
            count++;
        }
        for(i = 0; i < START8NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START8AT,
                    longitude: START8ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START8ROT
                }
            )
            count++;
        }
        for(i = 0; i < START9NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START9AT - ((SPACE-0.00001)*i),
                    longitude: START9ON,
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START9ROT
                }
            )
            count++;
        }
        for(i = 0; i < START10NUM; i++) {
            this.state.tMarkers.push(
                {
                    coordinate: {
                    latitude: START10AT,
                    longitude: START10ON - (SPACE*i),
                    },
                    vacant: true,
                    key: count,
                    identifier: 'Spot' + count,
                    rotation: START10ROT
                }
            )
            count++;
        }
        this.setState({
            marker: this.state.tMarkers
        })
    }

    componentDidMount() {
        this.state.interval = setInterval(() => {

            console.log("Timer Fired")

        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { region, marker, tMarkers, total } = this.state;
        return (

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.h1}>Available Spots: {this.state.free} / {this.state.total} </Text>
                </View>

                <View style={styles.main}>
                    <MapView
                        style={styles.map}
                        initialRegion={region}
                        zoomEnabled={false}
                        loadingEnabled={true}
                        >
                        {this.state.marker.map(marker=>(
                            <MapView.Marker
                                identifier={'Spot'+marker.key}
                                coordinate={marker.coordinate}
                                flat={true}
                                rotation={marker.rotation}
                                >
                                <Image
                                    source={marker.vacant ? markerVacant: markerTaken}
                                    style={styles.marker}
                                />
                                <MapView.Callout style={styles.tag}>
                                <View>
                                    <Text>Spot{marker.key}</Text>
                                    <Text>Type: student</Text>
                                    <Text>Vacancy:{marker.vacant? ' T': ' F'}</Text>
                                </View>
                                </MapView.Callout>
                            </MapView.Marker>
                        ))}

                    </MapView>
                </View>

                <View style={{flex: 2.5}}>
                    <BottomNav />
                </View>
            </View>
        )
    }
}

CheckIn.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8cc63f'
    },
    header: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 12,
        flexDirection: 'row',
        backgroundColor: '#434343',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1: {
        fontSize: 20,
        color: '#ffffff'
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    tag: {
        alignItems: 'center',
        width: 90,
    },
    marker: {
        height: 55 * 0.6,
        width: 40 * 0.6
    }

});

AppRegistry.registerComponent('CheckIn', () => CheckIn);