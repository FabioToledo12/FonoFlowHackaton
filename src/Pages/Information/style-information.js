import { StyleSheet } from 'react-native'

const styleHome = StyleSheet.create({
	BoxContainer: {
		flex: 1,
		padding: 10,
		// marginTop: 10,
		backgroundColor: '#FFF5EE',
		// alignItems: "center",
		// justifyContent: "center",
	},

	TextWecome: {
		width: '100%',
		marginTop: 30,
		textAlign: 'center',
		fontWeight: '900',
		fontSize: 15,
		color: '#FF7C00',
		textShadowColor: 'rgba(0, 0, 128, 0.80)',
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 5,
		//backgroundColor: '#000',
	},

	BoxScroll: {
		width: '100%',
		flex: 1,
	},

	ViewItens: {
		marginBottom: 15,
		// backgroundColor: '#000',
	},

	BoxButton: {
		flex: 1,
		//backgroundColor: "#f00",
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 15,
		paddingLeft: 10,
		paddingRight: 10,
		gap: 20,
	},
	ScreenBeginText: {
		width: '100%',
		// textAlign: 'justify',
		color: '#363636',
		fontSize: 16,
	},

	ScreenBeginTitleText: {
		idth: '100%',
		textAlign: 'left',
		color: '#000',
		fontSize: 16,
		fontWeight: '900',
	},

	LinkText: {
		width: '100%',
		textAlign: 'center',
		color: '#22ee',
		textDecorationLine: 'underline',
		fontSize: 16,
	},
	ButtonHomeSecundary: {
		width: '100%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF7C45',
		borderRadius: 10,
	},
	TextButton: {
		width: '100%',
		textAlign: 'center',
		fontSize: 16,
		color: '#363b96',
		fontWeight: '900',
	},
})

export default styleHome
