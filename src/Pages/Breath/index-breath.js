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
import styleHome from './style-breath.js'

import Header from '../../components/Header/index-header'

export default function Breath() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Header title={'Respirador Oral'} />

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
							• Dormir com boca aberta
						</Text>
						<Text style={styleHome.ScreenBeginText}>• Roncos</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Excesso de saliva no travesseiro
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Dificuldade para dormir ou sono agitado
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Irritabilidade e sonolência durante o dia
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Recorrentes crises de rinite, bronquite, otite, amigdalite e
							outros
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Os lábios são normalmente entreabertos, ressecados e a gengiva
							pode inflamar
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• O céu da boca fica profundo e a língua baixa
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Tem olheiras e aspecto cansado
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Respiração barulhenta
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Por causa da flacidez na boca e na língua, o processo de
							mastigação e engolir também ficam comprometidos
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Dentes do meio da arcada de cima (incisivos superiores) abertos
							e projetados para frente
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Come rápido, mastiga pouco, utiliza líquido para auxiliar na
							hora de engolir e prefere alimentos pastosos
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Image
							style={styleHome.TextImage}
							source={require('../../images/respiracao-text-2.png')}
						/>
					</View>

					<View style={styleHome.ViewItens}>
						<Image
							style={styleHome.TextImage}
							source={require('../../images/respiracao-text.png')}
						/>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Esses são hábitos de um respirador Oral!
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Quem devo procurar para tratar a respiração oral
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							O tratamento para a respiração oral é multidisciplinar. O
							diagnóstico de obstruções e impedimentos para que o ar passe pelo
							nariz é médico e a resolução da obstrução também, podendo ser
							medicamentosa ou até cirúrgica. Importante procurar um
							Otorrinolaringologista. Dependendo de quanto tempo o indivíduo
							ficou respirando pela boca e das consequências que ocorreram, o
							respirador oral pode necessitar de vários profissionais como
							dentistas, nutricionistas, psicólogos, psicopedagogos,
							fisioterapeutas e o fonoaudiólogo.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>Prevenção:</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A prevenção é a conduta terapêutica, antes ou durante a
							enfermidade, para impedir que ela se instale e/ou progrida a fim
							de alcançar a cura parcial ou total.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Orientar sobre a importância e estimular:
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							<View style={styleHome.ViewItens}>
								<Text style={styleHome.ScreenBeginText}>
									• Respiração nasal
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Amamentação natural
								</Text>
								<Text style={styleHome.ScreenBeginText}>
									• Mastigação efetiva (alimentos duros e secos)
								</Text>
							</View>
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A FONOAUDIOLOGIA é essencial na atuação do respirador oral, pois
							irá promover o correto funcionamento das funções orofaciais. Este
							trabalho é de competência do FONOAUDIÓLOGO ESPECIALISTA EM
							MOTRICIDADE OROFACIAL.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Agora que você já conhece um pouquinho da respiração oral, não
							perca tempo, procure ajuda de um profissional!
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
