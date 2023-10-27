import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";

import { Home } from "./screen";
import { COLORS,FONTS, SIZES, icons } from "./constants";
import { Image, TouchableOpacity } from "react-native";
import { menu } from "./constants/icons";

const theme ={

  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"trasparent",
  }
}

const Stack = createNativeStackNavigator();

const App = ()=>{

  return(
    <NavigationContainer theme={theme} >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}
        options={{
          title:'SHOE SELECTOR',
          headerTintColor:COLORS.lightGray,
          headerTitleStyle:{
            ...FONTS.navTitle
          },
          headerTitleAlign:"center",
          headerLeft:({onPress})=>(

            <TouchableOpacity 
            style={{marginLeft:SIZES.padding}}
            onPress={onPress}
            >
              <Image source={icons.menu} resizeMode="contain"
              style={{
                width:25,
                height:25
              }}
              />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity 
            style={{marginLeft:SIZES.padding}}
            onPress={()=>console.log("Search the Content ")}
            >
              <Image source={icons.search} resizeMode="contain"
              style={{
                width:25,
                height:25
              }}
              />
            </TouchableOpacity>
          )
          
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return <App/>
}