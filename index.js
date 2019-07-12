import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import axios from 'axios'
import Navigator from './src/Navigator'
import { name as appName } from './app.json'
import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = 'https://lambe-fsmf.firebaseio.com/'

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']) 
AppRegistry.registerComponent(appName, () => Redux)