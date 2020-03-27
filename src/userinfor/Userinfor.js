import React, { Component } from 'react'
import {AsyncStorage, View,Text,StatusBar,SafeAreaView, StyleSheet, ScrollView ,Image,Dimensions, TouchableHighlight, ImageBackground} from 'react-native' ;
import {Grid,Icon, WhiteSpace} from '@ant-design/react-native' 
import {Actions} from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker';
const {width,scale}=Dimensions.get('window');
const s=width/640


const IconName=['setting','environment','audit','file-done','qrcode','hdd','star']
const name=['账户管理','收货地址','我的信息','我的订单','我的二维码','我的积分','我的收藏']
const data = Array.from(new Array(7)).map((_val, i) => ({
    icon: <Icon size={30} color={'#aeaeae'} name={IconName[i]}/>,
    text: <Text style={{fontSize:17,color:'#4f4e4e'}}>{name[i]}</Text>,
}));

const IconName1=['tool','car','user','desktop','flag','form'];
const name1=['居家维修','出行接送','我的受赠人','我的住宿优惠','我的活动','我的发布']
const data1 = Array.from(new Array(6)).map((_val, i) => {
    if(i==5){
        return {
            icon: <Icon onPress={()=>Actions.publish()} size={30} color={'#aeaeae'} name={IconName1[i]}/>,
            text: <Text onPress={()=>Actions.publish()} style={{fontSize:17,color:'#4f4e4e'}}>{name1[i]}</Text>,
        }
    }else{
        return {
            icon: <Icon size={30} color={'#aeaeae'} name={IconName1[i]}/>,
            text: <Text style={{fontSize:17,color:'#4f4e4e'}}>{name1[i]}</Text>,
        }
    }
});

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


export default class Mine extends Component {

    constructor(){
        super();
        this.state={
            imageUrl:require('../../assets/touxiang.png'),
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('source')
        .then(res=>{
            // console.log('res',res)
            if(res!=null){
                this.setState({
                    imageUrl: {uri:res},
                });
            }else{
                this.setState({
                    imageUrl:require('../../assets/touxiang.png')
                })
            }
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('source')
        .then(res=>{
            // console.log('res',res)
            if(res!=null){
                this.setState({
                    imageUrl: {uri:res},
                });
            }else{
                this.setState({
                    imageUrl:require('../../assets/touxiang.png')
                })
            }
        })
    }
    takePhoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {  
                const source = { uri: response.uri };
                console.log('source',source)
                AsyncStorage.setItem('source',source.uri)
                AsyncStorage.getItem('source')
                .then(res=>{
                    console.log('res',res)
                    this.setState({
                        imageUrl: {uri:res},
                    });
                })
            }
            // AsyncStorage.removeItem('source');
        });
    }
    logoff=()=>{
        AsyncStorage.removeItem('user')
        Actions.login();
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor='red'/>
                <SafeAreaView>
                    <ScrollView style={{backgroundColor:'#fff'}}>
                        <View style={styles.header}>
                            <ImageBackground source={require('../../assets/gerenzhongxin.png')}  style={{width:'100%', height:'100%',alignItems:'center'}}>
                                <TouchableHighlight style={{width:158*s,height:158*s,borderRadius:75*s,overflow:'hidden',marginTop:61*s,}} onPress={()=>{this.takePhoto()}}>
                                    <View style={{width:158*s,height:158*s,borderRadius:75*s,overflow:'hidden',backgroundColor:'red'}}>
                                        <Image style={{width:158*s,height:158*s}} source={this.state.imageUrl} />
                                    </View>
                                </TouchableHighlight>
                            </ImageBackground>
                        </View>
                        <View style={styles.next}>
                            <Icon size={30} color={'#aeaeae'} name='user' style={{marginLeft:10}} />
                            <Text style={{fontSize:17,marginLeft:20,marginTop:3,color:'#4f4e4e'}}>我的个人中心</Text>
                        </View>
                        <Grid
                        data={data}
                        columnNum={3}
                        itemStyle={{ height: 100, backgroundColor: '#fff' }}
                        hasLine={false} 
                        />
                        <WhiteSpace style={{backgroundColor:'#eee'}}/>
                        <View style={styles.next}>
                            <Icon size={30} color={'#aeaeae'} name='edit' style={{marginLeft:10}} />
                            <Text style={{fontSize:17,marginLeft:20,marginTop:3,color:'#4f4e4e'}}>E族活动</Text>
                        </View>
                        <Grid
                        data={data1}
                        columnNum={3}
                        itemStyle={{ height: 100, backgroundColor: '#fff' }}
                        hasLine={false} 
                        />
                        <View style={styles.footer}>
                            <Text onPress={this.logoff}  style={{color:'#8a8a8a',fontSize:17}}>BINNU  DHILLON  |  退出</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:382*s,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    next:{
        width:'100%',
        height:50,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
        // backgroundColor:'blue'
    },
    footer:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eee'
    },
    grid:{
        width:200*s,
        height:100*s,
        marginLeft:8,
        alignItems:'center',
    },
    icon:{
        marginTop:15
    },
    icontext:{
        fontSize:17,
        color:'#4f4e4e',
        marginTop:7
    }
})