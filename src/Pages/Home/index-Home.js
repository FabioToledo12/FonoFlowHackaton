import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button/index-button'
import Header from '../../components/Header/index-header'

import styleHome from './style-home.js'

export default function Home() {
	return (
		<View style={styleHome.BoxContainer}>
			<Text style={styleHome.Title}>Escolha uma opção</Text>
			<Button />
		</View>
	)
}
