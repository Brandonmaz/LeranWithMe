import Home from '../screens/homeScreen'
import Color from '../screens/colorPicker'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000',
            },
            activeTintColor: '#fff'
        }}>
            <Tab.Screen 
                name={"Home"} 
                component={Home} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={'home-circle'} size={30} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen 
                name={"Color Matching"} 
                component={Color} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={'home-circle'} size={30} color={color}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs