import React from 'react'
import { Text, View } from 'react-native'
import styleTitle from './style-header'

// import { useFonts, Volkhov_700Bold } from "@expo-google-fonts/volkhov";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function Header(props) {
	// let [fontsLoaded] = useFonts({
	//   Inter_900Black,
	// });

	// if (!fontsLoaded) {
	//   return null;
	// }

	return (
		<View style={styleTitle.BoxTitle}>
			<Text style={styleTitle.TextTitle}>{props.title}</Text>
		</View>
	)
}
