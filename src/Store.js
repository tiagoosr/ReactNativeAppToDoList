import { createStore } from 'redux';

import Reducers from './Reducers/index';

const store = createStore(Reducers);

export default store;