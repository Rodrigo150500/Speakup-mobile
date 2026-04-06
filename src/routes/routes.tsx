import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login";
import { Register } from "../screens/register";

const Stack = createNativeStackNavigator()

export function AppRoutes(){

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="register" screenOptions={{headerShown: false}} >
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Register}/>
            </Stack.Navigator>

        </NavigationContainer>
    )

}