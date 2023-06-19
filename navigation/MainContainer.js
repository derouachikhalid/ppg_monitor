import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import React from 'react';
import ListView from './screens/ListScreens/ListView';
import MonitorView from './screens/MonitorScreens/MonitorView';
import AuthView from './screens/AuthScreens/AuthView';

const homeName = "Acquisition";
const listName = "Enregistrements";
const authName = "Se connecter";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route})=>({
                tabBarIcon : ({focused,color,size})=>{
                    let iconName;
                    let rn = route.name;

                    if(rn == homeName){
                        iconName = focused ? 'analytics' : 'analytics-outline'

                    }else if (rn == listName){
                        iconName = focused ? 'list' : 'list-outline'

                    }else if (rn == authName){
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                        
                    }

                    return <Ionicons style={{flex : 1 }} name={iconName} color={color} size={size} />
                },
                tabBarStyle : {
                    paddingVertical : 10,
                    height : 50,
                    width : "100%",
                    flexDirection : "row",
                    justifyContent : "space-between"
                }
            })}

            >
                <Tab.Screen name={homeName} component={MonitorView} />
                <Tab.Screen name={listName} component={ListView} />
                <Tab.Screen name={authName} component={AuthView} />

            </Tab.Navigator>

        </NavigationContainer>
    );
}

export default MainContainer;
