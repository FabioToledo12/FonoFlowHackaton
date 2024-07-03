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
import styleHome from './style-language.js'

import Header from '../../components/Header/index-header.js'

export default function Language() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<View style={styleHome.BoxContainer}>
			<Header title={'Linguagem'} />

			<View style={styleHome.BoxButton}>
				<ScrollView
					style={styleHome.BoxScroll}
					showsVerticalScrollIndicator={false}
				>
					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>• Amamentou no peito?</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Usou chupeta, dedo, ou mamadeira ate depois dos 3 anos de vida?
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Passou por algum trauma em algum momento de vida?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Teve acesso a o uso de telas em mais de 1 hora por dia, antes
							dos 2 anos de idade?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Apresenta mutas trocas?
						</Text>

						<Text style={styleHome.ScreenBeginText}>• Já forma frases?</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Mantem conversas com facilidade?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Responde quando chamado?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Se assusta com facilidade?
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Com 1 ano de vida já produziu alguma palavra?
						</Text>

						<Text style={styleHome.ScreenBeginText}>• Canta músicas?</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Brinca fazendo sons das coisas? (ex: som do carrinho)
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							A comunicação humana
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A linguagem e essencial para a qualquer pessoa ter qualidade de
							vida e para o bem estar entre o meio vivido. As questões
							relacionadas à linguagem impactam o desenvolvimento social e
							emocional, processos de alfabetização e letramento. Linguagem não
							está somente apoiada a fala, mas também com expressão corporal
							para cada sentimento vivido.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Desenvolvimento da linguagem da criança
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							A aquisição da linguagem se inicia logo após o nascimento. Se
							inicia com o bebe, que se comunica através do choro, sorrisos,
							gritos e expressões faciais. Com o seu desenvolvimento entre 4 a
							11 meses se inicia a comunicação por meio de balbucios e grunhidos
							para se expressar. Por volta do 1 ano de idade o bebe já consegue
							transmitir suas primeiras palavras simples, nessa idade também e
							esperado que a criança identifique o seu próprio nome quando e
							chamado. Entorno dos 3 anos a criança já tem um repertorio amplo e
							já conseguem ter entendimento do que os adultos falam, porem
							possui algumas trocas e erros gramaticais. Com 4 anos de idade a
							criança está com a sua linguagem completa, essa fase a criança
							começa a inventar histórias e fica “falante”. Já com 5 anos de
							idade e esperado que a criança consiga produzir frases completas,
							já incluem na sua fala todos os sons da língua, apresentando
							poucas trocas.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							A aquisição da linguagem e algo de suma importância, por isso
							devemos estar atentos aos sinais para que possamos ajudar nossas
							crianças.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Ao que se refere a linguagem vamos falar um pouco sobre
							transtornos da fala, que afetam a comunicação e as expressões
							verbais. Entre eles nos temos alguns que podemos frisar, são eles:
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>• Beber muta água;</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Disfasia: Descoordenação da fala e/ou incapacidade de dispor as
							palavras de modo compreensível, as dificuldades podem envolver a
							gramática, vocabulário e articulação das palavras, impactando a
							comunicação fluida;
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Dislalia: Conhecido pela troca de letras, também pode
							caracterizar-se pela omissão de letras, quando se estende ap´´os
							os 4 anos de idade, assim, a criança afetada poderá falar “biito”
							ao invés de bonito, “tebisão” para televisão;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Disglossia: Envolve uma dificuldade na produção oral, resultante
							de alterações do controle muscular dos mecanismos de fala e
							provocado por algum tipo de lesão no sistema nervoso central ou
							periférico;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Disartria: Dificuldade na produção de fonemas que resultante de
							alguma paralisia dos órgãos de fonação;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Afasias: Dificuldades na compreensão da linguagem verbal,
							escrita e mesmo na capacidade de escrever. Geralmente ocasionadas
							por: Acidente Vascular Cerebral (AVC), tumores cerebrais, doenças
							egenerativas como a doença de Alzheimer;
						</Text>

						<Text style={styleHome.ScreenBeginText}>• Gagueira;</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Taquifemia: É um distúrbio da fluência da fala, nos quais os
							segmentos da conversação do falante são percebidos como muito
							rápido, irregular, ou ambos
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Apraxia de fala na infância: Um distúrbio motor que afeta a
							capacidade da criança produzir e sequenciar os sons da fala. Ela
							sabe o que quer dizer, mas seu cérebro falha ao planejar os
							movimentos que formam sílabas, palavras e frases.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							Todos os citados são tipos de transtornos de linguagem, é
							importante estarmos atentos a todos os sinais para que possamos
							ajudar a criança o mais rápido possível, para que ela tenha uma
							melhora rápida e eficaz. Para isso devemos falar dos profissionais
							capacitados para esse trabalho, temos como principais:
							fonoaudiólogo que atua como prevenção, diagnostico e terapia de
							problemas relacionados a linguagem, otorrinolaringologista e
							psicólogo, que vai atuar para sabermos qual a causa de tais
							transtornos.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>
							É de suma importância que para um bom desenvolvimento da linguagem
							da criança que os ambientes vividos proporcionam estímulos e
							trocas de experiencias com os outros.
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginTitleText}>
							Como posso estimular e ajudar a linguagem das crianças em casa?
						</Text>
					</View>

					<View style={styleHome.ViewItens}>
						<Text style={styleHome.ScreenBeginText}>• Beber muta água;</Text>
						<Text style={styleHome.ScreenBeginText}>
							• O primeiro passo e limitar o tempo limite de telas em somente 1
							hora, para que a criança possa ter um bom desenvolvimento ela
							precisa de trocas de saberes, para que isso acontece e necessário
							diminuir o tempo de telas e estar sempre estimulando com tarefas e
							brincadeiras que exigem mais do pensamento e habilidades da
							criança;
						</Text>
						<Text style={styleHome.ScreenBeginText}>
							• Incluir os pequenos em tarefas do dia-a-dia, como cozinhar,
							arrumar a cama, colocar as roupas sozinho, ajudar a dobrar ou
							limpar algum cômodo, para que a criança se sinta importante e
							necessária no lar;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Brincadeiras que exijam atividade física, como correr,
							esconde-esconde, balanço e escorregador;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Em suas tentativas de fala reforce com palavras positivas e
							animadoras;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Use livros com letras e números apresentando cada um para a
							criança;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Estímulos com brincadeiras que vão a mão na massa, com
							diferentes texturas e sensações, como tinta, massinha, geleca;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Se a criança possui mais de 3 anos e faz o uso de chupeta optar
							pelo desfralde da chupeta, já que a chupeta pode causar problemas
							ortodônticos e resulta em dificuldades na fala;
						</Text>

						<Text style={styleHome.ScreenBeginText}>
							• Esses são alguns estímulos que podem ser feitos em casa e
							qualquer lugar com a criança. Lembrando que tudo oque uma criança
							faz e uma brincadeira, então a estimulação tem que ser divertida e
							animada, para que seja algo prazeroso com a criança e para o
							adulto;
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
