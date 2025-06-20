import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getBackgroundColorAsync } from "expo-system-ui";

export default function tabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FF0000',
                tabBarInactiveTintColor: 'red',
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerShadowVisible: false,
                headerTintColor: '#FF0000',
                tabBarStyle: {
                    backgroundColor: '#000000',
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
