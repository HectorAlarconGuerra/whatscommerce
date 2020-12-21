import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
//import {Icon} from "react-native-elements";

import TiendaStack from "./TiendaStack";
import PerfilStack from "./PerfilStack";
import MiTienda from "./MiTiendaStack";

//aquí importaremos algunos componentes más tarde

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
             component = {TiendaStack}
             name = "tienda"
             options = {{title: "Tienda"}}
            />
            <Tab.Screen
              component = {MiTienda}
              name = "mitienda"
              options = {{title:""}}
            />
             <Tab.Screen
              component = {PerfilStack}
              name = "cuenta"
              options = {{title:"Cuenta"}}
            />
        </Tab.Navigator>

    )
}

export default function RutasAutenticadas(){
    return(
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    )
}