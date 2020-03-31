import React, {useState,useEffect} from 'react';
import {StyleSheet,StatusBar, AsyncStorage,View,Text, Image, BackHandler, ToastAndroid} from 'react-native';
import {Router,Overlay,Scene, Tabs,Drawer,Lightbox,Modal, Actions} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native' 

import SplashScreen from 'react-native-splash-screen'

import Home from './src/home/Home'
import Goods from './src/goods/Goods'
import User from './src/userinfor/Userinfor'
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish';
import Register from './src/common/Register';
import Demo from './components/Demo';

console.disableYellowBox=true;
const rootUrl='https://www.fastmock.site/mock/48a66b6b105a9c88c834ce567beb86ec/api'

const App = () => {
    let [isLogin,setLogin] = useState(false);
    let [isIntall,setInstall]=useState(true);
    //测试期间代码
    // AsyncStorage.removeItem('isInstall')
    let now = 0;
    let init=()=>{
        AsyncStorage.getItem('isInstall')
        .then(res=>{
            if(res){
                setInstall(false);
            }
        })
		// AsyncStorage.clear()
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
    }
	useEffect(()=>{
        init();
    },[])
    let afterInstall=()=>{
        console.log('after install');
        setInstall(false)
    }
    if(isIntall){
        return <View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }
    return (
        <Router
            backAndroidHandler={()=>{
                if(Actions.currentScene != 'login'&&Actions.currentScene!='home'){
                    Actions.pop();
                    return true;
                }else{
                    if(new Date().getTime()-now<2000){
                        BackHandler.exitApp();
                    }else{
                        ToastAndroid.show('确定要退出吗',100);
                        now = new Date().getTime();
                        return true;
                    }
                }
                
            }}
        >
            <Overlay>
            <Modal 
                key="modal" 
                hideNavBar
            >
                <Lightbox key="lightbox">
                    <Drawer 
                        key="drawer"
                        contentComponent={()=><Text>drawer</Text>}
                        drawerIcon={()=><Icon name="menu"/>}
                        drawerWidth={400}
                    >
                        <Scene key="root">
                            <Tabs 
                                key='tabbar'
                                hideNavBar
                                activeTintColor="red"
                                inactiveTintColor="#8a8a8a"
                                tabBarStyle={{backgroundColor:'#fff'}}
                            >
                                {/* 首页 */}
                                <Scene 
                                    key='homePage'
                                    title='首页'
                                    icon={
                                        ({focused})=><Icon 
                                            color={focused?'red':'#8a8a8a'} 
                                            size={30}
                                            name="home"
                                        />
                                    }
                                >
                                    <Scene key='home' hideNavBar={true} component={Home}/>
                                </Scene>
                                {/* 商品分类 */}
                                <Scene 
                                    key='goodsPage'
                                    title='商品分类'
                                    icon={
                                        ({focused})=><Icon 
                                            color={focused?'red':'#8a8a8a'} 
                                            size={30}
                                            name="appstore"
                                        />
                                    }
                                    
                                >
                                    <Scene key="goods" hideNavBar={true} component={Goods}/>
                                </Scene>
                                {/* 用户中心 */}
                                <Scene 
                                    key='userPage'
                                    hideDrawerButton
                                    icon={({focused})=>
                                        <Icon 
                                            color={focused?'red':'#8a8a8a'} 
                                            size={30}
                                            name='user'/>
                                        }
                                    title="用户中心"
                                    hideNavBar={true}
                                    
                                >
                                    <Scene key='user' hideNavBar={true} component={User}/>
                                    <Scene key='publish' hideNavBar={true} hideTabBar component={Publish} />
                                </Scene>
                                
                            </Tabs>
                        </Scene>
                    </Drawer>
                    {/* <Scene key='light' component={Mybox}/> */}
                </Lightbox>
                <Scene key='login' initial={!isLogin} component={Login} />
                <Scene key='register' component={Register} />
                {/* <Scene key="login" component={ShowMyName}/> */}
                {/* <Scene key="login1" component={Login}/> */}
            </Modal>
            {/* <Scene component={Message}/> */}
            </Overlay>
        </Router>
    );
};


// const App=()=>{
//   return <View>
//     <Demo01 name={100222}/>
//   </View>
// }
const styles = StyleSheet.create({
  
});

export default App;
