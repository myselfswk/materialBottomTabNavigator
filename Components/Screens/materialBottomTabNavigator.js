import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./home";
import AboutUS from "./aboutus";
import Profile from "./profile";

const Tab = createMaterialBottomTabNavigator();

const AppTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="black"
            inactiveColor="white"
            shifting={true}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#006D6A',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="About Us"
                component={AboutUS}
                options={{
                    tabBarLabel: 'About Us',
                    tabBarColor: '#1F65FF',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#8923CA',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

function MaterialBottomTabNavigator() {
    return (
        <NavigationContainer>
            <AppTabNavigator />
        </NavigationContainer>
    );
};

export default MaterialBottomTabNavigator;
