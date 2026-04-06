import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login";

const Stack = createNativeStackNavigator()

export function AppRoutes(){

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>

        </NavigationContainer>
    )

}