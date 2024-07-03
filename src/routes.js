import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { Text } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import Breath from './Pages/Breath/index-breath.js'
import Hearing from './Pages/Hearing/index-hearing.js'
import Home from './Pages/Home/index-Home.js'
import Information from './Pages/Information/index-information.js'
import Language from './Pages/Language/index-language.js'
import Speak from './Pages/Speak/index-speak.js'
import Swallow from './Pages/Swallow/index-swallow.js'
import Voice from './Pages/Voice/index-voice.js'

const Tab = createBottomTabNavigator()

export default function Routes() {
	return (
		<Tab.Navigator
			initialRouteName="Information"
			// tabBarOptions={{
			// 	activeBackgroundColor: '#fff0da',
			// }}
			screenOptions={{
				tabBarActiveTintColor: '#363b96',
				tabBarInactiveTintColor: '#fff0da',
				tabBarShowLabel: false,
				tabBarStyle: {
					// position: 'absolute',
					backgroundColor: '#FF7C45',
					borderTopWidth: 0,
					bottom: 5,
					left: 9,
					width: '95%',
					borderRadius: 8,
					height: 50,
					elevation: 0,
				},
			}}
		>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="information-variant"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="information-variant"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Information"
				component={Information}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons name="home" size={35} color={color} />
							)
						}
						return (
							<MaterialCommunityIcons
								name="home-outline"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Home"
				component={Home}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="account-box"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="account-box-outline"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Swallow"
				component={Swallow}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="weather-windy"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="weather-windy"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Breath"
				component={Breath}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="baby-face"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="baby-face-outline"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Voice"
				component={Voice}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="account-tie-voice"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="account-tie-voice"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Hearing"
				component={Hearing}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="account-music"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="account-music-outline"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Speak"
				component={Speak}
			/>

			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size, focused }) => {
						if (focused) {
							return (
								<MaterialCommunityIcons
									name="account-details"
									size={35}
									color={color}
								/>
							)
						}
						return (
							<MaterialCommunityIcons
								name="account-details-outline"
								size={size}
								color={color}
							/>
						)
					},
				}}
				name="Language"
				component={Language}
			/>
		</Tab.Navigator>
	)
}
