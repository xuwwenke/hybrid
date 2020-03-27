import React, { Component } from 'react'
import { View,TextInput,TouchableOpacity,Text,ScrollView,SafeAreaView,StatusBar,StyleSheet,Dimensions, FlatList, Image } from 'react-native' ;

import { Icon ,Carousel, Button,List, WhiteSpace} from '@ant-design/react-native';
const {width,scale}=Dimensions.get('window');
const s=width/640


const Item = List.Item;

export default class Home extends Component {
    
    render() {
        return (
            <>
                <StatusBar backgroundColor='red' />
                <SafeAreaView>
                    <ScrollView>
                        <View style={{flexDirection:'row',height:55,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
                            <View style={{
                                width:'80%',
                                height:40,
                                marginRight:10,
                                backgroundColor:'#fff',
                                opacity:0.7,
                                flexDirection:'row',
                                alignItems:'center',
                                borderRadius:20,
                                paddingLeft:5
                            }}>
                                <Icon size={30} color="#fff" name='search' style={{marginLeft:10,marginTop:3}} />
                                <TextInput 
                                placeholder="请输入您要搜索的关键字"
                                placeholderTextColor='#fff'
                                style={{
                                height:40,
                                width:"80%",
                                fontSize:17,
                                color:'#fff'
                                }} 
                                />
                            </View>
                            <Icon size={30} color="#fff" name='shopping-cart' />
                        </View>
                        <Carousel 
                            style={styles.wrapper}
                            autoplay={true}
                            infinite
                            style={{
                                height:230
                            }}
                        >
                            <View style={[styles.containerVertical, { backgroundColor: 'red' }]}>
                                <Image style={{width:'100%',height:285}} source={require('../../assets/lunbo.png')} />
                            </View>
                            <View style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
                                <Image style={{width:'100%',height:285}} source={require('../../assets/lunbo.png')} />
                            </View>
                            <View style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
                                <Image style={{width:'100%',height:285}} source={require('../../assets/lunbo.png')} />
                            </View>
                        </Carousel>
                        <List>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <Item arrow="horizontal" style={{
                                height:120*s,
                            }} onPress={() => {}}>
                                <View style={styles.item}>
                                    <Image style={{width:60,height:62}} source={require('../../assets/banshou.png')} />
                                    <Text style={styles.text}>居家维修保护</Text>
                                </View>
                            </Item>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <Item arrow="horizontal" style={{
                                height:120*s,
                            }} onPress={() => {}}>
                                <View style={styles.item}>
                                    <Image style={{width:60,height:62}} source={require('../../assets/xiaoqi.png')} />
                                    <Text style={styles.text}>住宿优惠</Text>
                                </View>
                            </Item>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <Item arrow="horizontal" style={{
                                height:120*s,
                            }} onPress={() => {}}>
                                <View style={styles.item}>
                                    <Image style={{width:60,height:62}} source={require('../../assets/tusan.png')} />
                                    <Text style={styles.text}>出行接送</Text>
                                </View>
                            </Item>
                            <WhiteSpace style={{backgroundColor:'#eee'}} />
                            <Item arrow="horizontal" style={{
                                height:120*s,
                            }} onPress={() => {}}>
                                <View style={styles.item}>
                                    <Image style={{width:60,height:62}} source={require('../../assets/libao.png')} />
                                    <Text style={styles.text}>E族活动</Text>
                                </View>
                            </Item>
                            
                        </List>
                        <Button style={{backgroundColor:'red',height:50,width:'80%',marginLeft:'10%',marginTop:33*s,borderRadius:10}}>
                            <Text style={{color:"#fff"}}>发布需求</Text>
                        </Button>
                        <View style={{width:'100%',height:110*s,alignItems:'center'}}>
                            <Text style={{color:'#8a8a8a',fontSize:16,marginTop:56*s}}>@E族之家版权所有</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

const styles=StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    text: {
        color: '#000',
        fontSize: 17,
        marginLeft:30,
        marginTop:17
    },
    item:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingBottom:5,
        marginTop:10,
    }
})
