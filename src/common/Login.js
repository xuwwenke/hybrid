import React, {Component} from 'react';
import {View, Text,Dimensions,Alert, Image,ActivityIndicator, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
const {width,scale}=Dimensions.get('window');
console.log('w',width);
console.log('s',scale)
const s=width/640
console.log(s)
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        // myFetch.get('/topics',{limit:4,user:'sss'})
        //     .then(res=>console.log(res))
        if(this.state.username!=''&&this.state.pwd!=''){
            this.setState({isloading:true})
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
                // 根据返回状态进行判断，正确时跳转首页
                if(res.data.state!='1'){
                    this.setState({isloading:false})
                    Alert.alert('用户名或密码错误');
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                        .then(()=>{
                            this.setState({isloading:false})
                            Actions.homePage();
                        })
                }
            })
        }else{
            Alert.alert('不能为空');
        }
    }
    register=()=>{
      AsyncStorage.setItem('user',true);
      Actions.register()
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
                        onPress={this.login}
                    >
                        <Text>登录</Text>
                    </TouchableOpacity>
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
                        <Text>没有账号？去注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isloading
                    ?<View style={{width:'100%',marginTop:50,alignItems:'center'}}>
                        <ActivityIndicator color="#8a8a8a" size={50}/>
                    </View>
                    :null
                }
            </View>
        );
    }
}