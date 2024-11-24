import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './home'
import { Passwords } from "./passwords";

const Tab = createBottomTabNavigator();

export function Routes(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Password" component={Passwords} />
      </Tab.Navigator>
    );
}