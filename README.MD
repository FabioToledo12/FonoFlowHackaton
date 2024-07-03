yarn create expo-app DevFono --template

yarn add @react-navigation/native

yarn add expo install react-native-screens react-native-safe-area-context

yarn add @react-navigation/bottom-tabs

npx expo install expo-font

npx expo install @expo-google-fonts/volkhov<nome fonte> expo-font

yarn add expo --fix
npx expo install --fix <- usa esse
npx expo-doctor
yarn start --tunnel

## INSTALANDO O BIOME PARA MELHORAR A FORMATACAO

    COMANDO: npm install --save-dev --save-exact @biomejs/biome
    COMANDO: npx @biomejs/biome init

# DENTRO DO biome.json

{
"$schema": "https://biomejs.dev/schemas/1.8.1/schema.json",
"organizeImports": {
"enabled": true
},
"linter": {
"enabled": true,
"rules": {
"recommended": true
}
},
"javascript": {
"formatter": {
"quoteStyle": "single",
"semicolons": "asNeeded"
}
}
}

## deploy do app no cel via expo

    ## eas submit
    # npm install -g eas-cli

    ## eas build
    # eas login
        -> coloca user e senha da home expo.dev

    ## estando logado basta executar o comando de build
        -> eas build (dessa forma gera para as duas plataformas)
        -> eas build --platform android (gera somente para o android)

## Para gerar uma apk instalavel no cel sem precisar subir pra play store

    -> dentro do arquivo eas.json

      "android": {
        "buildType": "apk"
      }


      "preview": {
      "android": {
        "buildType": "apk"
      },
      "distribution": "internal"
    },

#### eas build -p android --profile preview
