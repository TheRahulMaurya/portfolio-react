import { detailReducer } from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// creating store for getting detail
// applying middleware redux-thunk to handle error "Error: Actions must be plain objects. Use custom middleware for async actions."
export const detailStore = createStore(
    detailReducer,
    applyMiddleware(thunk) 
    );