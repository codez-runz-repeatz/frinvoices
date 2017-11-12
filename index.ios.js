import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import configStore from './configStore'

let store = configStore();
const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent('InvoicesAreGo', () => ReduxApp);
