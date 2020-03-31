import React, {Component} from 'react';
import {View, Text, Image,ActivityIndicator,  TextInput, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

import {myFetch} from '../utils'
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            pwdRepeat:'',
            isRegiste:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    pwdRepeathandle = (text)=>{
        this.setState({pwdRepeat:text})
    }
    register=()=>{
        if(this.state.username!=''&&this.state.pwd!=''&&this.state.pwdRepeat!=''){
            if(this.state.pwd==this.state.pwdRepeat){
                this.setState({isRegiste:true})
                myFetch.post('/register',{
                    username:this.state.username,
                    pwd:this.state.pwd}
                ).then(res=>{
                    console.log('res',res)
                    if(res.data.state=='1'||res.data.state=='2'){
                        this.setState({isRegiste:false})
                        Alert.alert('用户已存在');
                    }else{
                        AsyncStorage.setItem('register',JSON.stringify(res.data))
                            .then(()=>{
                                this.setState({isRegiste:false})
                                Alert.alert('注册成功');
                                Actions.login()
                            })
                    }
                    
                })
            }else{
                Alert.alert('两次密码不一致');
            }
        }else{
            Alert.alert('不能为空');
        }
    }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
                <View
                  style={{ alignItems: 'center'}}>
                    <View
                      style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                      }}>
                      <Icon name="user" color="red"/>
                      <TextInput placeholder="用户名" 
                          onChangeText={this.userhandle}
                      />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}
                      >
                        <Icon name="lock" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdhandle}
                            placeholder="密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}
                      >
                        <Icon name="lock" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdRepeathandle}
                            placeholder="再次输入密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:10
                        }}
                        onPress={this.register}
                    >
                        <Text>去登录</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isRegiste
                    ?<View style={{width:'100%',marginTop:50,alignItems:'center'}}>
                        <ActivityIndicator color="#8a8a8a" size={50}/>
                    </View>
                    :null
                }
            </View>
        );
    }
}