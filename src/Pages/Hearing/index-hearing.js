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
import styleHome from './style-hearing.js'

import Header from '../../components/Header/index-header.js'

export default function Hearing() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Header title={'Audição'} />

			<View style={styleHome.BoxButton}>
				<ScrollView
					style={styleHome.BoxScroll}
					showsVerticalScrollIndicator={false}
				>
					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Os cuidados com os ouvidos e a audição devem ocorrer em todas as
							idades. Desde bebês até a idade mais avançada. É um termo que se
							refere a todas as intervenções necessárias para prevenir,
							identificar e tratar a perda auditiva e doenças auditivas
							relacionadas, incluindo reabilitação e apoio as pessoas afetadas.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Desde o início da vida, precisamos ficar atentos. Nas crianças
							temos alguns marcos que podemos observar:
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							• 0 aos 4 meses: Diante de sons mais intensos, a criança deve
							apresentar respostas como desertar do sono, acelerar ou
							interromper a mamada, sustos e piscadas de olhos devem ocorrer,
							como reação aos sons mais baixos, Reação inconsistentemente aos
							sons familiares ( vozes dos pais e sons do cotidiano).
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• 4 aos 7 meses: localiza sons lateralmente e reconhece vocês
							familiares (mamãe, papai, irmãos, avós).
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• 7 aos 9 meses: Consegue demonstrar reações de agrado ou
							desagrado aos sons que ouve. Localiza a fonte sonora para o lado e
							para baixo, indiretamente.
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• 9 aos 13 meses: Localiza os sons aos seu redor (lados e abaixo)
							rapidamente. Compreende e responde a comandos verbais mais simples
							(“manda beijo”, “dá tchau”).
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• 13 meses aos 16 meses: Localiza sons aos seu redor para qualquer
							direção rapidamente. Começa a compreender e responder a comandos
							verbais mais complexos (“cadê a mamãe?”, “Quer comer?”)
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Acima dos 16 meses: Compreende ordens ou perguntas relacionadas
							às partes do seu corpo (“Cadê a cabeça?”, “vamos trocar a
							fralda?”).
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Deficiência auditiva, ou surdez, é toda e qualquer redução da
							capacidade de ouvir que pode ser causada por malformações do
							ouvido, fatores genéticos, ou por doenças adquiridas pela mãe e
							transmitidas para o bebê durante a gravidez, tais como rubéola e
							toxoplasmose.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A surdez ou a diminuição da audição, pode ser congênita ou ocorrer
							ao longo da vida. A surdez congênita, ou quando a criança já nasce
							com a perda, pode ser provocada no bebê durante a gestação por
							meio de medicamentos tomados pela mãe, por doenças adquiridas
							durante a gravidez, ou por causa hereditária. Doenças como
							sífilis, rubéola e toxoplasmose, quando contraídas durante a
							gestação, podem provocar surdez nas crianças. Por isso, faz-se
							necessário um adequado cuidado pré-natal. Mulheres devem tomar a
							vacina contra a rubéola antes da adolescência para que durante a
							gravidez estejam protegidas.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Quando não tratadas, a perda auditiva representa um desafio
							significativo para todas as faixas etárias, dificultando o
							desenvolvimento da linguagem, da comunicação, da cognição,
							limitando o acesso à educação, ao emprego e às interações sociais,
							o que gera impacto de longo alcance na vida das pessoas afetadas e
							de suas famílias.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A surdez também pode acontecer ao longo da vida de uma pessoa,
							provocada por algum trauma, por uso de remédios que afetam a
							audição, por infecções de ouvido ou pela própria idade avançada.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Ações urgentes são necessárias para prevenir e tratar o problema,
							a fim de mitigar seus reflexos em todas as fases da vida, com
							atendimento oportuno e apropriado, por meio das tecnologias e
							intervenções disponíveis e eficazes, garantindo às pessoas com
							deficiência auditiva, a oportunidade de realizar todo o seu
							potencial.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Cuidar bem da audição envolve manter hábitos de vida saudáveis
							quanto a alimentação e exercícios físicos, que garantem o
							bem-estar geral do corpo, mas principalmente evitar ambientes com
							ruídos altos e com um tempo de exposição prolongada. Para
							profissionais que estão expostos a grande poluição sonora, é
							preciso utilizar protetor auditivo. Oferecer suporte emocional e
							psicológico para pessoas com perda auditiva, ajudando-as a lidar
							com os desafios diários. Recomendações Profissionais: Por isso
							realize com frequência exames auditivos regulares. Mantenha o
							volume de dispositivos de áudio (como fones de ouvido e aparelhos
							de som) em níveis seguros. Faça pausas regulares para descansar os
							ouvidos quando estiver exposto a ruídos altos por longos períodos.
							Não utilize cotonetes ou outros objetos para limpar os ouvidos,
							pois isso pode causar danos ao canal auditivo e ao tímpano.
							Vacinar-se contra doenças que podem causar perda auditiva (como
							caxumba e sarampo) e tratar prontamente qualquer infecção do
							ouvido. Visite um otorrinolaringologista especialista em audição
							para avaliações e orientações personalizadas. Se necessário, faça
							uso de tecnologias a seu favor e utilize aparelhos auditivos ou
							outras tecnologias para melhorar a audição. E tenha um suporte
							emocional e psicológico para lhe ajuda a lidar com os desafios
							diário da perda auditiva. Seguindo estas recomendações, é possível
							preservar a saúde auditiva e prevenir problemas que podem
							comprometer a qualidade de vida.
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
