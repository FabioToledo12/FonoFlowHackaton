import { StyleSheet } from 'react-native'

const styleTitle = StyleSheet.create({
	BoxTitle: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	TextTitle: {
		width: '100%',
		// backgroundColor: '#000',
		textAlign: 'center',
		fontWeight: 'bold',
		// fontFamily: "",
		color: '#FF7C00',
		fontSize: 45,
		textShadowColor: 'rgba(0, 0, 128, 0.75)',
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 5,
	},
})

export default styleTitle
