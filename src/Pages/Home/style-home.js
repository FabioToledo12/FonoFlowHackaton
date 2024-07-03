import { StyleSheet } from 'react-native'

const styleHome = StyleSheet.create({
	BoxContainer: {
		flex: 1,
		padding: 10,
		marginTop: 20,
		backgroundColor: '#FFF5EE',
	},

	Title: {
		width: '100%',
		textAlign: 'center',
		fontWeight: '900',
		fontSize: 30,
		color: '#FF7C00',
		textShadowColor: 'rgba(0, 0, 128, 0.80)',
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 5,
		marginBottom: 5,
	},
})

export default styleHome
