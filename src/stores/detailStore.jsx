import { detailReducer } from '../reducers';
import { createStore } from 'redux';

// creating store for getting detail
export const detailStore = createStore(detailReducer);