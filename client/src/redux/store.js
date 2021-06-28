import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from './rootReducer'
import ReduxThunk from 'redux-thunk'
const middleware=[logger,ReduxThunk];
const store=createStore(rootReducer,applyMiddleware(...middleware));
export default store;