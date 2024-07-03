import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styleHome from './style-information.js'

import Button from '../../components/Button/index-button'
import Header from '../../components/Header/index-header'

export default function Information() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Text style={styleHome.TextWecome}>Seja Bem Vindo ao</Text>
			<Header title={'FonoFlow'} />

			<View style={styleHome.BoxButton}>
				<ScrollView
					style={styleHome.BoxScroll}
					showsVerticalScrollIndicator={false}
				>
					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Esse aplicativo facilita seu entendimento da necessidade de um
							profissional e o encontro com o seu fonoaudiólogo ideal!
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Você conhece as áreas que a Fonoaudiologia atua?
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>👉🏽 Audiologia</Text>
						<Text style={styleHome.ScreenBeginText}>👉🏽 Linguagem</Text>
						<Text style={styleHome.ScreenBeginText}>
							👉🏽 Motricidade Orofacial
						</Text>

						<Text style={styleHome.ScreenBeginText}>👉🏽 Saúde Coletiva</Text>

						<Text style={styleHome.ScreenBeginText}>👉🏽 Voz</Text>

						<Text style={styleHome.ScreenBeginText}>👉🏽 Disfagia</Text>

						<Text style={styleHome.ScreenBeginText}>
							👉🏽 Fonoaudiologia Educacional
						</Text>

						<Text style={styleHome.ScreenBeginText}>👉🏽 Gerontologia</Text>

						<Text style={styleHome.ScreenBeginText}>
							👉🏽 Fonoaudiologia Neurofuncional
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							👉🏽 Fonoaudiologia do Trabalho
						</Text>

						<Text style={styleHome.ScreenBeginText}>👉🏽 Neuropsicologia</Text>

						<Text style={styleHome.ScreenBeginText}>👉🏽 Fluência</Text>

						<Text style={styleHome.ScreenBeginText}>
							👉🏽 Perícia Fonoaudiológica
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							👉🏽 Fonoaudiologia Hospitalar
						</Text>
					</View>
				</ScrollView>
				<Text
					style={styleHome.LinkText}
					onPress={() => {
						Linking.openURL('https://fonoaudiologia.org.br/')
					}}
				>
					Clique aqui se quiser saber mais
				</Text>
				<TouchableOpacity
					style={styleHome.ButtonHomeSecundary}
					onPress={() => navigate('Home')}
				>
					<Text style={styleHome.TextButton}>Entrar no FonoFlow</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
