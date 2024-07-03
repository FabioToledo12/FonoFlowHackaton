import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

//import Home from './src/Pages/Home/index-home'
// import Title from "./src/components/Title/Title-index";
// import Home from "./src/Pages/Home/index-home";
import Routes from './src/routes.js'

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" backgroundColor="#FF7C45" />
			<Routes />
		</NavigationContainer>
	)
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#0f0f0a",
//     backgroundColor: "#DCDCDC",
//     paddingTop: "15%",
//   },
// });
