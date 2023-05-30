import { combineReducers, createStore } from 'redux';
import { contactReducer } from './reducers';

const rootReducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
