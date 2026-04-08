import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login";
import { Register } from "../screens/register";
import { Home } from "../screens/home";
import { RootStackParamList } from "../screens/types/screen_types";
import { Chat } from "../screens/chat";

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes(){

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="chat" screenOptions={{headerShown: false}} >
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register}/>
                <Stack.Screen name="home" component={Home} initialParams={{role: "TEACHER"}}/>
                <Stack.Screen name="chat" component={Chat} initialParams={{role: "STUDENT"}}/>
            </Stack.Navigator>

        </NavigationContainer>
    )

}