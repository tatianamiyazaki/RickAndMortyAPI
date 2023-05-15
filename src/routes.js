import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login";
import Signin from "./pages/signin";
import Main from "./pages/main";
import Details from "./pages/details";

const Stack = createStackNavigator();

export default function Routes (){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: "#13B510",
                    },
                    headerTitleStyle:{
                        color: '#fff',
                        fontWeight: 'bold',
                    }
                }}/>

                <Stack.Screen name="signin" component={Signin} options={{
                    title: 'Cadastrar Usuário',
                    headerLeft: null,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: "#13B510",
                    },
                    headerTitleStyle:{
                        color: '#fff',
                        fontWeight: 'bold',
                    }
                }}/>

                <Stack.Screen name="main" component={Main} options={{
                    title: 'Cards',
                    headerLeft: null,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: "#13B510",
                    },
                    headerTitleStyle:{
                        color: '#fff',
                        fontWeight: 'bold',
                    }
                }}/>
                
                <Stack.Screen name="details" component={Details} options={{
                    title: 'Detalhes',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: "#13B510",
                    },
                    headerTitleStyle:{
                        color: '#fff',
                        fontWeight: 'bold',
                    }
                }}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}