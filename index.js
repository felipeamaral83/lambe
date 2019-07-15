import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import axios from 'axios'
import App from './src/App'
import { name as appName } from './app.json'
import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = 'https://lambe-fsmf.firebaseio.com/'

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']) 
AppRegistry.registerComponent(appName, () => Redux)