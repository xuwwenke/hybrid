import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start = () => {
        console.log('start')
        AsyncStorage.setItem('isInstall','true',()=>{
            console.log('store end');
            this.props.afterInstall();
        });
    };
  render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/beijing.jpg')}
                    />
                    <Text style={styles.first}>欢迎使用</Text>
                </View>
                <View style={styles.slide1}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/slide.png')}
                    />
                </View>
                <View style={styles.slide1} >
                    <Image
                        style={styles.img}
                        source={require('../../assets/motianlun.jpg')}
                    />
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={{color: '#fff',fontSize:18}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
    slide1: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    first:{
        position: 'absolute',
        top:'20%',
        fontSize:30,
        color:'#fff'
    },
    start: {
        position: 'absolute',
        bottom: 150,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        opacity:0.8
    },
});