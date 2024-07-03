import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styleButton from './style-button'

import AudicaoIMG from '../../images/audicao4.png'
import DisfagiaIMG from '../../images/disfagia1.png'
import FalaIMG from '../../images/fala3.png'
import LinguagemIMG from '../../images/linguagem6.png'
import RespiradorIMG from '../../images/respirador2.png'
import VozIMG from '../../images/voz5.png'
import Header from '../Header/index-header'

export default function Button() {
	const { navigate, goBack, canGoBack } = useNavigation()

	return (
		<>
			<View style={styleButton.BoxContainerButtons}>
				<View style={styleButton.ContainerButtons}>
					<Text style={styleButton.TextButton}>Dificuldade para Engolir</Text>
					<TouchableOpacity
						style={styleButton.Buttons}
						onPress={() => navigate('Swallow')}
					>
						<Image source={DisfagiaIMG} style={styleButton.ImageButton} />
					</TouchableOpacity>
				</View>

				<View style={styleButton.ContainerButtons}>
					<Text style={styleButton.TextButton}>
						Respira constantemente pela boca
					</Text>
					<TouchableOpacity
						style={styleButton.Buttons}
						onPress={() => navigate('Breath')}
					>
						<Image source={RespiradorIMG} style={styleButton.ImageButton} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styleButton.BoxContainerButtons}>
				<View style={styleButton.ContainerButtons}>
					<Text style={styleButton.TextButton}>Atraso na fala infantil</Text>
					<TouchableOpacity
						style={styleButton.Buttons}
						onPress={() => navigate('Voice')}
					>
						<Image source={FalaIMG} style={styleButton.ImageButton} />
					</TouchableOpacity>
				</View>

				<View style={styleButton.ContainerButtons}>
					<Text style={styleButton.TextButton}>
						Dificuldade para ouvir ou zumbidos
					</Text>
					<TouchableOpacity
						style={styleButton.Buttons}
						onPress={() => navigate('Hearing')}
					>
						<Image source={AudicaoIMG} style={styleButton.ImageButton} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styleButton.BoxContainerButtons}>
				<View style={styleButton.ContainerButtons}>
					<Text style={styleButton.TextButton}>Perde a voz com frequência</Text>
					<TouchableOpacity
						style={styleButton.Buttons}
						onPress={() => navigate('Speak')}
					>
						<Image source={VozIMG} style={styleButton.ImageButton} />
					</TouchableOpacity>
				</View>

				<View style={styleButton.ContainerButtons}>
					<Text style={styleButton.TextButton}>
						Trocas ou dificuldades com a linguagem e escrita
					</Text>
					<TouchableOpacity
						style={styleButton.Buttons}
						onPress={() => navigate('Language')}
					>
						<Image source={LinguagemIMG} style={styleButton.ImageButton} />
					</TouchableOpacity>
				</View>
			</View>
		</>
	)
}
