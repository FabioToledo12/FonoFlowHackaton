import { StyleSheet } from 'react-native'

const styleButton = StyleSheet.create({
	BoxContainerButtons: {
		// backgroundColor: "#f09",
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
	},

	ContainerButtons: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 5,
	},

	TextButton: {
		textAlign: 'center',
		width: '100%',
		fontSize: 14,
		color: '#FF4500',
		textShadowColor: 'rgba(0, 0, 0, 0.15)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 5,
	},

	Buttons: {
		backgroundColor: '#F0FFFF',
		height: 145,
		width: 145,
		marginBottom: 10,
		borderRadius: 40,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		//borderColor: "#330099",
		borderColor: '#FF4500',
	},

	ButtonsExercises: {
		// backgroundColor: "#c100ff",
		backgroundColor: '#F0FFFF',
		height: 150,
		width: '100%',
		marginBottom: 10,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		//borderColor: "#330099",
		borderColor: '#FF4500',
	},

	ImageButton: {
		width: '100%',
		height: '80%',
		// backgroundColor: "#444",
	},

	ImageButtonExercises: {
		width: '50%',
		height: '100%',
		// backgroundColor: "#444",
	},
})

export default styleButton
