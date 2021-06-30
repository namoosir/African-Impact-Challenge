import Routes from './components/routes'

import {Provider} from 'react-redux'
import store from './store'
import main from './css/main.css'
import main2 from './css/main2.css'

function App() {
  return (
    <Provider store = {store}>
        <Routes />
    </Provider>
  );

}

export default App;
