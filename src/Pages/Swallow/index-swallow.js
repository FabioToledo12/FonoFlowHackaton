import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styleHome from './style-swallow.js'

import Header from '../../components/Header/index-header.js'

export default function Swallow() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Header title={'Disfagia'} />

			<View style={styleHome.BoxButton}>
				<ScrollView
					style={styleHome.BoxScroll}
					showsVerticalScrollIndicator={false}
				>
					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Você já vivenciou algumas das situações abaixo, ou conhece alguém
							que já passou por isso?
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							• Dificuldade para mastigar
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Sensação de que o alimento fica parado na garganta
						</Text>
						<Text style={styleHome.ScreenBeginText}>• Engasgos frequentes</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Necessidade de tomar líquidos para engolir os alimentos
						</Text>

						<Text style={styleHome.ScreenBeginText}>• Regurgitação nasal</Text>

						<Text style={styleHome.ScreenBeginText}>• Fala anasalada</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Tosse ou redução do reflexo da tosse
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Dor ou impossibilidade de engolir
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Isso pode ser Disfagia!
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Alguns exames podem ajudar no diagnóstico, são eles: a
							videonasofibroscopia da deglutição, que é feito por especialistas
							em otorrinolaringologia e fonoaudiologia, e a videodeglutograma,
							que é um exame de imagem realizado pelo fonoaudiólogo. Já as
							crianças e idosos (com idade avançada), que não conseguem falar ou
							não sabem expressar o que estão sentindo, a observação dos pais e
							cuidadores, é fundamental para um diagnóstico preciso. Nesse caso,
							a consulta é com um médico pediatra ou geriatra. Ele vai fazer
							perguntas sobre como o paciente se comporta durante a alimentação,
							o que inclui desde o aleitamento materno, a introdução de
							alimentos sólidos e o comportamento alimentar nas refeições feitas
							com a família. Para confirmar o diagnóstico, também serão
							realizados exames de videonasofibroscopia da deglutição ou
							videodeglutograma.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Quem devo procurar para tratar a disfagia?
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A forma de tratar a disfagia depende de cada caso. No geral, o
							paciente recebe o acompanhamento de uma equipe multidisciplinar,
							com o suporte do otorrinolaringologista, gastroenterologista,
							fonoaudiólogo e nutricionista. O fonoaudiólogo é o profissional
							com expertise para tratar as disfagias, adaptando as dietas,
							realizando exercícios para fortalecer e estimular os processos de
							deglutição. A disfagia pode comprometer seriamente a sua qualidade
							de vida. Isso porque o estabelecimento da doença interfere
							diretamente na sua alimentação, podendo causar desnutrição e
							desidratação, sem falar que pode ser resultado de patologias mais
							graves. Diante disso, ao sentir dificuldade e dor para engolir
							alimentos e líquidos com frequência, é imprescindível buscar ajuda
							médica para obter diagnóstico e tratamento apropriados.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Como é o tratamento da Disfagia?
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A Disfagia é um sintoma, e quando não está relacionada a uma
							doença gastroesofágica, tem cura e em alguns casos é necessário a
							desobstrução, o uso de remédios e até intervenção cirúrgica. Na
							maior parte das ocorrências não traz riscos à saúde, e a pessoa
							pode seguir algumas dicas:
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							<View style={styleHome.ViewItens}>
								<Text style={styleHome.ScreenBeginText}>
									• Dificuldade para mastigar
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Alimentos macios
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Evitar alimentos secos
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Evitar ingestão de líquidos
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Mordidas menores
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Sentar-se de forma ereta ao comer ou beber algum líquido
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Evitar deitar-se após comer
								</Text>
							</View>
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Este trabalho é de competência do FONOAUDIÓLOGO ESPECIALISTA
							DEGLUTIÇÃO. Agora que você já conhece um pouquinho da deglutição,
							não perca tempo, procure ajuda de um profissional!
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
					Buscar especialista
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
