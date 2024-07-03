import { StyleSheet } from 'react-native'

const styleHome = StyleSheet.create({
	BoxContainer: {
		flex: 1,
		padding: 10,
		marginTop: 15,
		backgroundColor: '#FFF5EE',
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
		gap: 20,
		// marginTop: 10,
		padding: 10,
	},
	ScreenBeginTitleText: {
		idth: '100%',
		textAlign: 'justify',
		color: '#000',
		fontSize: 15,
		fontWeight: '900',
	},
	ScreenBeginText: {
		width: '100%',
		// height: '10%',
		textAlign: 'justify',
		color: '#363636',
		fontSize: 15,
		// backgroundColor: '#000',
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
