import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
	Image,
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import styleHome from './style-voice.js'

import Header from '../../components/Header/index-header.js'

export default function Voice() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Header title={'Atraso de fala'} />

			<View style={styleHome.BoxButton}>
				<ScrollView
					style={styleHome.BoxScroll}
					showsVerticalScrollIndicator={false}
				>
					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Se você tem contato com crianças (1º filho, sobrinhos, afilhados),
							fique sempre alerta. Existem idades para que elas realizem alguns
							sons e fala de palavras.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							• De 1 ao 3 meses: Comunica-se com o meio basicamente por
							variações de entonação de choro e de sons emitidos
							involuntariamente. Chora, emite alguns sons e dá gargalhadas.
							Sorri quando alguém fala de frente pra ela.
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• De 4 a 6 meses: Grita, emite alguns sons como se conversasse
							(“papapa”, “mamama”). Presta atenção quando alguém está falando e
							vocaliza.
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• De 7 a 11 meses: Além de emitir sons, repete palavras simples
							(“dá”, “não”), bate palmas, aponta o que quer e dá “tchau”.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Aos 12 meses: Aumenta a interação verbal por meio de balbucios e
							palavras simples de forma clara e emita a ação de outras pessoas.
							Identifica o próprio nome quando é chamada. Entende ordens simples
							como “bebe água!”, “Vamos brincar?”.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Aos 18 meses: Está apta a se comunicar formando frases curtas de
							2 a 3 palavras.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Com 2 anos: Tem cerca de um repertório de 300 palavras em seu
							vocabulário. Compreende e emite frases simples. Pergunta nomes e
							funções de objetos.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Com 3 anos: Já é possível entender tudo o que a criança fala, no
							entanto podem ocorrer erros gramaticais ou temporais “Fui amanhã
							na vovó.”.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Com 4 anos: É totalmente capaz de inventar histórias, entende
							regras e jogos simples.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Com 5 anos: Fala corretamente frases completas e todos os sons
							da língua.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Vale lembrar que esses marcos são parâmetros, porém se atingiu a
							idade e não consegue falar o que é esperado, a família deve ficar
							em alerta, pois o diagnóstico precoce, traz uma possibilidade
							muito maior de tratamento. O tratamento envolve uma equipe
							multidisciplinar: Pediatra, Otorrinolaringologista e terapia
							fonoaudiológica. Alguns exames serão necessários para melhor
							avaliação. Procure um profissional que possa te ajudar!
						</Text>
					</View>
				</ScrollView>
				<Text
					style={styleHome.LinkText}
					onPress={() => {
						Linking.openURL(
							'https://fonoaudiologia.org.br/fonoaudiologos/especialista-por-area',
						)
					}}
				>
					Buscar um especialista
				</Text>
				<TouchableOpacity
					style={styleHome.ButtonHomeSecundary}
					onPress={() => navigate('Home')}
				>
					<Text style={styleHome.TextButton}>Voltar</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
