import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { productReducers} from '../reducers/productReducers';



let store = createStore(productReducers,composeWithDevTools(applyMiddleware(thunk)))

export default store;