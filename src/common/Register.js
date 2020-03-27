import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    register=()=>{
        if(this.state.username!=''&&this.state.pwd!=''){
            Alert.alert('注册成功');
            Actions.login();
        }else{
            Alert.alert('注册失败');
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
            </View>
        );
    }
}