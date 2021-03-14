import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../rootReducer/RootReducer';
import epicMiddleware, { rootEpic } from "../rootEpic/RootEpic";

const composeEnhancer = composeWithDevTools({
  name: 'ClothME WEB APP',
});

export function configureStore<AppState>(initialState: AppState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, epicMiddleware];
  const { run } = sagaMiddleware;
  const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(...middleware)));
  epicMiddleware.run(rootEpic);
  
  return store;
  
}
