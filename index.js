import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import Navigator from './src/Navigator'
import { name as appName } from './app.json'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']) 
AppRegistry.registerComponent(appName, () => Redux)