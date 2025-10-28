import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getBackgroundColorAsync } from "expo-system-ui";

export default function tabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#black',
                tabBarInactiveTintColor: 'black',
                headerStyle: {
                    backgroundColor: '#white',
                },
                headerShadowVisible: false,
                headerTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Página inicial",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'grid-sharp' : 'grid-sharp'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information' : 'information'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="buscaCep"
                options={{
                    title: 'CEP',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'location' : 'location'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="toDoList"
                options={{
                    title: 'Lista',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'menu' : 'menu'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );

}
