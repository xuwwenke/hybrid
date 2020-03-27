import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions,ToastAndroid} from 'react-native'
import { Button, Icon } from '@ant-design/react-native';
import {Actions}  from  'react-native-router-flux';

const {width,scale}=Dimensions.get('window');
const s=width/640
export default class Publish extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            randomNum:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.page)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
        this.random();
    }
    componentWillUpdate(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+this.state.page)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    listPage=()=>{
        if(this.state.page<=1){
            ToastAndroid.show('这已经是第一页了',1000)
        }else{
            var page1=this.state.page-1
            this.setState({
                page:page1
            })
            this.state.randomNum.splice(0);
            this.random();
        }
    }
    nextPage=()=>{
        var page1=this.state.page+1
        this.setState({
            page:page1
        })
        this.state.randomNum.splice(0);
        this.random();
    }
    random=()=>{
        for(var i=0;i<15;i++){
            this.state.randomNum.push(parseInt(Math.random()*5))
          }
    }
    render() {
        return (
            <View>
                <View style={{height:55,width:'100%',backgroundColor:'red',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    {/* <Icon name='left' style={{marginLeft:15*s}} color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23,marginLeft:'35%'}}>我的发布</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginLeft:'27%'}}/> */}
                    <Icon name='left' style={{marginLeft:15}}  color="#fff" onPress={()=>{Actions.pop()}} />
                    <Text style={{color:'#fff',fontSize:23}}>我的发布</Text>
                    <Icon name='ellipsis' size={35} color="#fff" style={{marginRight:15}}/>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.left} >
                            {
                                this.state.data.map((item)=>(
                                    <Text style={{marginTop:15,marginLeft:15}} >{item.title.length>15?item.title.substr(0,16)+"...":item.title}</Text>
                                ))
                            }
                        </View>
                        <View style={styles.right}>
                            <View style={styles.little}>
                                {
                                    this.state.data.map((item)=>(
                                        <Text style={{marginTop:15}} >{item.create_at.substr(0,10)}</Text>
                                    ))
                                }
                            </View>
                            <View style={styles.lest}>
                                {
                                    this.state.randomNum.map((item)=>{
                                        if(item%2==1){
                                            return (
                                                <Text style={{marginTop:15,color:'red'}} >待回复</Text>
                                            )
                                        }else{
                                            return (
                                                <Text style={{marginTop:15}} >已回复</Text>
                                            )
                                        }
                                    })
                                }
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Button style={styles.button} onPress={this.listPage}>
                            <Text style={styles.text}>上一页</Text>
                        </Button>
                        <Text style={{fontSize:15}}>第 {this.state.page} 页</Text>
                        <Button style={styles.button} onPress={this.nextPage}>
                            <Text style={styles.text}>下一页</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    body:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff'
        
    },
    left:{
        width:'50%',
        height:520,
        backgroundColor:'#fff'
    },
    right:{
        width:'50%',
        backgroundColor:'#fff',
        height:520,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    little:{
        height:500,
        backgroundColor:'#fff',
        marginLeft:80*s
    },
    lest:{
        height:500,
        backgroundColor:'#fff',
        marginRight:15
    },
    footer:{
        width:'100%',
        height:80,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    button:{
        width:100,
        height:40,
        borderRadius:20,
        backgroundColor:'red'
    },
    text:{
        color:'#fff'
    }
})
