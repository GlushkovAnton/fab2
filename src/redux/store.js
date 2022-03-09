import { configureStore } from '@reduxjs/toolkit';
import fab2Reducer from './fab2Slice'

export default configureStore({
	reducer: {
        fab2: fab2Reducer,
    },
});