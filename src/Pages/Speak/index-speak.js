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
import styleHome from './style-speak.js'

import Header from '../../components/Header/index-header.js'

export default function Speak() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Header title={'Perde a voz com frequência'} />

			<View style={styleHome.BoxButton}>
				<ScrollView
					style={styleHome.BoxScroll}
					showsVerticalScrollIndicator={false}
				>
					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							• Sua voz apresenta rouquidão na final do dia?
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Sente os lábios ou a boca muito seco durante o dia?
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Bebe no mínimo 2 litros de água por dia?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Usa muito a voz no trabalho? (como professores, recepcionista ou
							palestrantes)
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Dorme no mínimo 7 horas por dia?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Faz exercícios regularmente?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Apresenta sensação de pigarro na garganta?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• No final do dia apresenta cansaço vocal?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• No final do dia apresenta uma pressão maior no maxilar?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Perde o fôlego ou a voz durante uma conversa?
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A voz e de grande importância, principalmente para profissionais
							que utilizam muito da voz, como professores, cantores,
							palestrantes, telemarketing e muitos outros. Mas para que possam
							usar a voz de maneira correta sem danos a alguns cuidados que
							devemos ter, para que tenhamos uma boa saúde bucal e uma voz
							saudável.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							CUIDADOS COM A SAUDE BUCAL
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>• Beber muta água;</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Evitar de ingerir líquidos ou muito gelados ou muito quentes;
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Higiene bucal a todo momento (escovar bem os dentes, lembrar de
							passar fio dental);
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Manter uma alimentação saudável, apostar em frutas e legumes,
							principalmente a maçã, que ajuda na higiene e rica em vitaminas;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Fazer um descanso vocal (ficar alguns minutos de silencio
							durante o dia);
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Evitar de ficar em ambientes com muita fumaça, mofo, poeira e
							cheiros fortes;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Manter uma postura adequada sempre;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Evitar substancias danosos (cigarro, álcool ou outras drogas);
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Existem diversos agentes externos que podem afetar a voz, para
							evitar qualquer tipo de problemas relacionados a voz devemos
							sempre estar atentos. Os problemas enfrentados por pessoas que não
							usam corretamente a voz podem desencadear rouquidão, cansaço
							vocal, variações na frequência habitual voz, nódulos, pólipos,
							cistos, tosse crônica e sensação de corpo estranho na garganta.
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
