import React, { Component } from 'react'
import {ScrollView,
        Button, 
        StyleSheet,
        View,
        Text,
        StatusBar,
        Dimensions,
        TextInput,
        TouchableOpacity,
        FlatList,
        Image
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import Item from '@ant-design/react-native/lib/list/ListItem';

const {width,scale}=Dimensions.get('window');
const s=width/640

const goods=[
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36',
        img:require('../../assets/shanghaojia.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36',
        img:require('../../assets/shanghaojia1.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36',
        img:require('../../assets/shanghaojia.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36',
        img:require('../../assets/shanghaojia1.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36',
        img:require('../../assets/shanghaojia.png')
    },
    {
        title:'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price:'36',
        img:require('../../assets/shanghaojia1.png')
    },
]
export default class Test extends Component {
    constructor(){
        super();
        this.state={
            tits:[]
        }
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor='red'/>
                <View style={{flex:1,backgroundColor:'#fff'}}>
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <TextInput 
                                placeholder="请输入商品名称"
                                placeholderTextColor='#8e8e8e'
                                style={{width:490*s,
                                        height:37,
                                        paddingLeft:10,
                                }} />
                            <Icon name='search'/>
                        </View>
                    </View>
                    <View style={styles.nav}>
                        <TouchableOpacity>
                            <Text style={{color:'red'}}>综合</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>销量</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>新品</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>价格</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>使用</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={goods}
                        numColumns={2}
                        style={{backgroundColor:'#f4f4f4'}}
                        renderItem={({item})=>(
                            <View style={styles.goods}>
                                <Image source={item.img}
                                    resizeMode='contain'
                                    style={{height:180*s,marginTop:60*s}}
                                />
                                <Text
                                    style={{marginTop:20}}
                                >{item.title}</Text>
                                <Text 
                                    style={{width:'100%',color:'red',marginTop:10}}
                                >{item.price}</Text>
                            </View>
                        )}
                    />
                </View>
            </>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        height:53,
        // backgroundColor:'red',
        borderBottomColor:'#8e8e8e',
        borderBottomWidth:1/3,
        justifyContent:"center",
        alignItems:'center'
    },
    search:{
        width:554*s,
        height:37,
        backgroundColor:'#eeeeee',
        flexDirection:'row',
        alignItems:'center',
    },
    nav:{
        height:73*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    goods:{
        width:290*s,
        backgroundColor:'#fff',
        marginLeft:20*s,
        marginTop:20*s,
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20
    }
})